import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

// Encode the dynamic text for safe URL inclusion
const dynamicText = encodeURIComponent('730');

// Construct the URL for the OG image with the dynamic text
if (!process.env.NEXT_PUBLIC_URL) {
  throw new Error('Invalid/Missing environment variable: "NEXT_PUBLIC_URL"');
}

const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og?episode_number=${dynamicText}`;

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time!',
    },
  ],
  image: {
    src: ogImageUrl,
    // src: `${NEXT_PUBLIC_URL}/park-3.png`,
    // aspectRatio: '1:1',
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
    images: [`${process.env.NEXT_PUBLIC_URL}/api/og`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
