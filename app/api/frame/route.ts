// app/api/frame/route.ts

import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

import { getMessageInput } from '../../utils/getMessageInput';

import { segmentButtons } from '../../components/frame/buttons';
import { frameInput } from '../../components/frame/input';
import { framePostUrl } from '../../components/frame/postURL';


async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Get Episode Number
  const { searchParams } = new URL(req.url);
  const episodeNumberStr = searchParams.get('episode_number');

  // Validate Frame & get message (segment number)
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
  const segmentNumber: string | undefined = getMessageInput(message);

  // Set the segment image URL
  const segmentImageUrl = { 
    src: `${process.env.NEXT_PUBLIC_URL}/api/segment?episode_number=${episodeNumberStr}&segment_number=${segmentNumber}`
  };

  return new NextResponse(
    getFrameHtmlResponse({
      image:segmentImageUrl,      
      input: frameInput,
      buttons: segmentButtons,
      postUrl:framePostUrl,
    }),
  );
}


export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
