import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  // Get URL
  if (!process.env.NEXT_PUBLIC_URL) {
    throw new Error('Invalid/Missing environment variable: "NEXT_PUBLIC_URL"');
  }  
  let accountAddress: string | undefined = '';
  let segmentNumber: string | undefined = '';

  // Encode the dynamic text for safe URL inclusion
  const episodeNumber: string = '700';
  const encodedEpisodeNumber = encodeURIComponent(episodeNumber);

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (message?.input) {
    segmentNumber = message.input;
  }
  // const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og?episode_number=${encodedEpisodeNumber}?segment_number=${text}`;
  // const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/segment?episode_number=${encodedEpisodeNumber}&segment_number=${encodedSegmentNumber}`;
  const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/segment?episode_number=${encodedEpisodeNumber}&segment_number=${segmentNumber}`;

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Story: ${segmentNumber} 🌲`,
        },
      ],
      image: {
        src: ogImageUrl,
      },
      postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
