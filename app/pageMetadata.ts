// pageMetadata.ts

import type { Metadata } from 'next';
import { frameMetadata } from './frameMetadata';


const title = 'TLDL Frames';
const description = 'Too Long Didn\'t Listen Frames'

export const metadata: Metadata = {
  //  Metadata for the page
  title: title,
  description: description,

  // Standard Open Graph Metadata (Shows in Discord ect)
  openGraph: {
    title: title,
    description: description,
    images: [`${process.env.NEXT_PUBLIC_URL}/TLDL_wide.png`],
  },

  // Frames Metadata (Shows in Warpcast Frames) 
  other: {
    ...frameMetadata,
  },
};
