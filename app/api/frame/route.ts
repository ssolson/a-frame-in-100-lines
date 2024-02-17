// app/api/frame/route.ts

import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

import { getMessageInput } from '../../utils/getMessageInput';

import { segmentButtons } from '../../components/frame/buttons';
import { frameInput } from '../../components/frame/input';
import { makeFramePostUrl } from '../../components/frame/postURL';

import { getTitleImageObject, getSegmentImageObject } from '../../components/frame/image';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Get Episode Number
  const { searchParams } = new URL(req.url);
  const episodeNumberStr = searchParams.get('episode_number');
  if (!episodeNumberStr) {
    return NextResponse.json({ status: 400, message: 'Episode number not found' });
  }

  // Validate Frame & get message (segment number)
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  // Determine Image URL based on button
  let imageObject;
  if (message?.button === 1) {
   const segmentNumber: string | undefined = getMessageInput(message);
    // Get Segment Image URL
    imageObject = getSegmentImageObject(episodeNumberStr, segmentNumber)
  } else if (message?.button === 2) {
    // Get Title Image URL
    imageObject = getTitleImageObject(episodeNumberStr);
    console.log("BODY:",body)
    console.log('MESSAGE:', message)
  }
  else {
    imageObject = getTitleImageObject(episodeNumberStr);
  }

  return new NextResponse(
    getFrameHtmlResponse({
      image:imageObject,      
      input: frameInput,
      buttons: segmentButtons,
      postUrl: makeFramePostUrl(episodeNumberStr),
    }),
  );
}


export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
