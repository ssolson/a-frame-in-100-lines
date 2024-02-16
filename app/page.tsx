import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

// Encode the dynamic text for safe URL inclusion
const dynamicText = encodeURIComponent('730');

// Construct the URL for the OG image with the dynamic text
if (!process.env.NEXT_PUBLIC_URL) {
  throw new Error('Invalid/Missing environment variable: "NEXT_PUBLIC_URL"');
}

const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/title?episode_number=${dynamicText}`;

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Go To Segment #',
    },
  ],
  image: {
    src: ogImageUrl,
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
    images: [`${process.env.NEXT_PUBLIC_URL}/api/title?episode_number=${dynamicText}`],
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
