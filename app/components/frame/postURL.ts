// app/components/frame/postURL.ts

export function makeFramePostUrl(episodeNumber: string, currentSegment?: string): string {
  const encodedEpisodeNumber = encodeURIComponent(episodeNumber);
  let url = `${process.env.NEXT_PUBLIC_URL}/api/frame?episode_number=${encodedEpisodeNumber}`;

  if (currentSegment) {
    const encodedCurrentSegment = encodeURIComponent(currentSegment);
    url += `&current_segment=${encodedCurrentSegment}`;
  }

  return url;
}
