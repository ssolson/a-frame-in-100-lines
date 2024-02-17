// app/utils/getImageUrl.ts

/**
 * Generates a URL for an image based on episode title or segment.
 * @param {string} type - The type of image (episode or segment).
 * @param {string} episodeNumber - The episode number.
 * @param {string} [segmentNumber] - The optional segment number.
 * @returns {string} The generated URL.
 */
export function getImageUrl(type: 'title' | 'segment', episodeNumber: string, segmentNumber?: string): string {
    let baseUrl = process.env.NEXT_PUBLIC_URL;
    if (type === 'title') {
      return `${baseUrl}/api/title?episode_number=${encodeURIComponent(episodeNumber)}`;
    } else if (type === 'segment' && segmentNumber) {
      return `${baseUrl}/api/segment?episode_number=${encodeURIComponent(episodeNumber)}&segment_number=${encodeURIComponent(segmentNumber)}`;
    } else {
      throw new Error('Invalid parameters for URL generation');
    }
  }
  