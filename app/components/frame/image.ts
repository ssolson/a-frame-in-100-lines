// app/components/frame/image.ts

const episodeNumber: string = '730';
const encodedEpisodeNumber = encodeURIComponent(episodeNumber);
export const titleImageUrl = {
    src: `${process.env.NEXT_PUBLIC_URL}/api/title?episode_number=${encodedEpisodeNumber}`,
  }

