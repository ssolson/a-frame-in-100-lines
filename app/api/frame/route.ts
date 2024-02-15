import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (message?.input) {
    text = message.input;
  }
  const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og`;

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Story: ${text} 🌲`,
        },
      ],
      image: {
        src:`${process.env.NEXT_PUBLIC_URL}/api/og`,
        // src: `${NEXT_PUBLIC_URL}/park-3.png`,
      },
      postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
