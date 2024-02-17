// app/components/frame/image.ts



import { getImageUrl } from '../../utils/getImageUrl';

export function getTitleImageObject( episodeNumber: string, segmentNumber?: string): {src: string} {
  const titleImage : string = getImageUrl('title', episodeNumber)
  const titleImageObject = {
    src: titleImage,
  } 
  return titleImageObject;
  }

export function getSegmentImageUrl(type: 'segment', episodeNumber: string, segmentNumber?: string): {src: string} {
   
    const segmentImage : string = getImageUrl('segment', episodeNumber, segmentNumber);
    const segmentObject = {
      src: segmentImage,
    } 
    return segmentObject;
  }