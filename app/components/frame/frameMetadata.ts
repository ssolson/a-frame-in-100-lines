// app/components/frame/frameMetadata.ts

import { getFrameMetadata } from '@coinbase/onchainkit';

import { titleButtons } from './buttons';
import { getTitleImageObject } from './image';
import { frameInput } from './input';
import { framePostUrl } from './postURL';

const episodeNumber: string = '730';
export const encodedEpisodeNumber = encodeURIComponent(episodeNumber);

export const frameMetadata = getFrameMetadata({   
  image: getTitleImageObject(encodedEpisodeNumber),
  input: frameInput,
  buttons: titleButtons,
  postUrl: framePostUrl,
});
