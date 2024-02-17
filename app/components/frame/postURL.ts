// app/components/frame/postURL.ts

export function makeFramePostUrl( episodeNumber: string ):string {
  const encodedEpisodeNumber = encodeURIComponent(episodeNumber);
  return `${process.env.NEXT_PUBLIC_URL}/api/frame?episode_number=${encodedEpisodeNumber}`;
}
