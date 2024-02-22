// app/api/frame/route.ts

import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

import { getMessageInput } from '../../utils/getMessageInput';

import { segmentButtons } from '../../components/frame/buttons';
import { frameInput } from '../../components/frame/input';
import { makeFramePostUrl } from '../../components/frame/postURL';

import { getTitleImageObject, getSegmentImageObject } from '../../components/frame/image';
import { EpisodeProps } from '../../../types';

import getEpisodeData from '../../utils/dbUtils';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Get Episode Number
  const { searchParams } = new URL(req.url);
  let episodeNumberStr = searchParams.get('episode_number');
  if (!episodeNumberStr) {
    return NextResponse.json({ status: 400, message: 'Episode number not found' });
  }

  // Check for current segment
  let currentSegmentNumber = searchParams.get('current_segment');
  if (!currentSegmentNumber) {
    currentSegmentNumber = '1';
  }

  // Validate Frame & get message (segment number)
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  // Determine Image URL based on button
  let imageObject;
  if (message?.button === 1) {
    const segmentNumber: string | undefined = getMessageInput(message);
    // Get Segment Image URL
    imageObject = getSegmentImageObject(episodeNumberStr, segmentNumber);
  } else if (message?.button === 2) {
    // Go to next segment
    const nextSegmentNumber: Number = parseInt(currentSegmentNumber, 10) + 1;
    currentSegmentNumber = nextSegmentNumber.toString();
    imageObject = getSegmentImageObject(episodeNumberStr, currentSegmentNumber);
  } else {
    imageObject = getTitleImageObject(episodeNumberStr);
  }

  //  If episode number is latest, then get the # to prevent look up every time
  if (episodeNumberStr === 'latest') {
    const episodeDataResult = await getEpisodeData();
    const episodeData: EpisodeProps = episodeDataResult as unknown as EpisodeProps;
    episodeNumberStr = String(episodeData.episode_number);
  }

  return new NextResponse(
    getFrameHtmlResponse({
      image: imageObject,
      input: frameInput,
      buttons: segmentButtons,
      postUrl: makeFramePostUrl(episodeNumberStr, currentSegmentNumber),
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
