import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

import { getMessageInput } from '../../utils/getMessageInput';

import { segmentButtons } from '../../components/frame/buttons';
import { frameInput } from '../../components/frame/input';
import { framePostUrl } from '../../components/frame/postURL';


// Encode the dynamic text for safe URL inclusion
const episodeNumber: string = '730';
const encodedEpisodeNumber = encodeURIComponent(episodeNumber);


async function getResponse(req: NextRequest): Promise<NextResponse> {

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  const segmentNumber: string|undefined = getMessageInput(message);

  const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/segment?episode_number=${encodedEpisodeNumber}&segment_number=${segmentNumber}`;

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: ogImageUrl,
      },
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
