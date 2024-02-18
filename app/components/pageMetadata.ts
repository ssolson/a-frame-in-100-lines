// app/components/pageMetadata.ts

import type { Metadata } from 'next';
import { frameMetadata } from './frame/frameMetadata';

export const getDynamicMetadata = (episodeNumber: string): Metadata => {
  const title = `TLDL Frames - Episode ${episodeNumber}`;
  const description = `Too Long Didn't Listen - Episode ${episodeNumber} Frames`;

  return {
    // Dynamic Metadata for the page
    title: title,
    description: description,

    // Standard Open Graph Metadata (Shows in Discord, etc.)
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
};
