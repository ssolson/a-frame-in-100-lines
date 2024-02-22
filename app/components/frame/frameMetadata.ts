// app/components/frame/frameMetadata.ts

import { getFrameMetadata } from '@coinbase/onchainkit';

import { titleButtons } from './buttons';
import { getTitleImageObject } from './image';
import { frameInput } from './input';
import { makeFramePostUrl } from './postURL';

export const frameMetadata = getFrameMetadata({
  image: getTitleImageObject('latest'),
  input: frameInput,
  buttons: titleButtons,
  postUrl: makeFramePostUrl('latest'),
});

export const getDynamicFrameMetadata = (episodeNumber: string) => {
  return getFrameMetadata({
    image: getTitleImageObject(episodeNumber),
    input: frameInput,
    buttons: titleButtons,
    postUrl: makeFramePostUrl(episodeNumber),
  });
};
