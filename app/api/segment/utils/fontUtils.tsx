// fontUtils.tsx

import fetch from 'node-fetch';

// Define the font files URLs
const robotoRegularFile = `${process.env.NEXT_PUBLIC_URL}/fonts/roboto/Roboto-Regular.ttf`;
const robotoBoldFile = `${process.env.NEXT_PUBLIC_URL}/fonts/roboto/Roboto-Bold.ttf`;
const robotoMediumFile = `${process.env.NEXT_PUBLIC_URL}/fonts/roboto/Roboto-Medium.ttf`;
const robotoLightFile = `${process.env.NEXT_PUBLIC_URL}/fonts/roboto/Roboto-Light.ttf`;

export const fetchFontArrayBuffer = async (url: string): Promise<ArrayBuffer> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch the font: ${response.statusText}`);
  }
  return response.arrayBuffer();
};

export const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
  const buf = Buffer.from(buffer);
  return buf.toString('base64');
};

export const fontFiles = {
  robotoRegularFile,
  robotoBoldFile,
  robotoMediumFile,
  robotoLightFile,
};
