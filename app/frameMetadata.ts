// frameMetadata.ts
import { getFrameMetadata } from '@coinbase/onchainkit';

const dynamicText = encodeURIComponent('730');
const ogImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/title?episode_number=${dynamicText}`;

export const frameMetadata = getFrameMetadata({
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
