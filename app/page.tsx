import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time!',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_URL}/api/og`,
    // src: `${NEXT_PUBLIC_URL}/park-3.png`,
    // aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a boat story',
  },
  postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Hello World!',
  description: 'LFG',
  openGraph: {
    title: 'Heello World!',
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
      <h1>zizzamia.xyz</h1>
    </>
  );
}
