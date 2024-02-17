// app/components/frame/image.ts

import { getImageUrl } from '../../utils/getImageUrl';

export function getTitleImageObject( episodeNumber: string ): {src: string} {
  const titleImage : string = getImageUrl('title', episodeNumber)
  const titleImageObject = {
    src: titleImage,
  } 
  return titleImageObject;
  }


export function getSegmentImageObject( episodeNumber: string, segmentNumber?: string): {src: string} {
   
    const segmentImage : string = getImageUrl('segment', episodeNumber, segmentNumber);
    const segmentImageObject = {
      src: segmentImage,
    } 
    return segmentImageObject;
  }