// pageMetadata.ts
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const dynamicText = encodeURIComponent('730');
const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/title?episode_number=${dynamicText}`;

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Go To Segment #',
    },
  ],
  image: {
    src: ogImageUrl,
  },
  input: {
    text: 'Enter Segment Number',
  },
  postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Hello World!',
  description: 'LFG',
  openGraph: {
    title: 'Hello World!',
    description: 'LFG',
    images: [`${process.env.NEXT_PUBLIC_URL}/api/title?episode_number=${dynamicText}`],
  },
  other: {
    ...frameMetadata,
  },
};
