// app/components/frame/image.ts

const episodeNumber: string = '730';
export const encodedEpisodeNumber = encodeURIComponent(episodeNumber);

import { getImageUrl } from '../../utils/getImageUrl';

export const titleImageUrl = {
    src: getImageUrl('title', episodeNumber) ,
  }

export function segmentImageUrl(type: 'title' | 'segment', episodeNumber: string, segmentNumber?: string): {src: string} {
   
    const segmentImage : string = getImageUrl('segment', episodeNumber, segmentNumber);
    const segmentObject = {
      src: segmentImage,
    } 
    return segmentObject;
  }