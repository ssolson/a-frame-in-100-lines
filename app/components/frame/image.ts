// app/components/frame/image.ts

const episodeNumber: string = '730';
export const encodedEpisodeNumber = encodeURIComponent(episodeNumber);

import { getImageUrl } from '../../utils/getImageUrl';

export const titleImageUrl = {
    src: getImageUrl('title', episodeNumber) ,
  }

