// pageMetadata.ts

import type { Metadata } from 'next';
import { frameMetadata } from './frameMetadata';


const title = 'TLDL Frames';
const description = 'Too Long Didn\'t Listen Frames'

export const metadata: Metadata = {
  //  Metadata for the page
  title: title,
  description: description,

  // Standard Open Graph Metadata
  openGraph: {
    title: title,
    description: description,
    images: [`${process.env.NEXT_PUBLIC_URL}/park-1.png`],
  },

  // Frames Metadata  
  other: {
    ...frameMetadata,
  },
};
