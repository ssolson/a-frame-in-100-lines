// app/components/frame/image.ts

const dynamicText = encodeURIComponent('730');
export const titleImageUrl = {
    src: `${process.env.NEXT_PUBLIC_URL}/api/title?episode_number=${dynamicText}`,
  }

