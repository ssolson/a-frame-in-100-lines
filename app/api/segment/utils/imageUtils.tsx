// imageUtils.tsx

import fetch from 'node-fetch';

// Define the image files URLs
const TDGLogoFile = `${process.env.NEXT_PUBLIC_URL}/the-daily-gwei.jpg`;
const TLDLWide = `${process.env.NEXT_PUBLIC_URL}/TLDL_wide.png`;
const TLDLLogo = `${process.env.NEXT_PUBLIC_URL}/TLDL.png`;

export const fetchImageArrayBuffer = async (url: string): Promise<ArrayBuffer> => {
  const response = await fetch(new URL(url, import.meta.url));
  if (!response.ok) {
    throw new Error(`Failed to fetch the image: ${response.statusText}`);
  }
  return response.arrayBuffer();
};

export const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  const buf = Buffer.from(buffer);
  return buf.toString('base64');
};

export const imageFiles = {
  TDGLogoFile,
  TLDLWide,
  TLDLLogo,
};
