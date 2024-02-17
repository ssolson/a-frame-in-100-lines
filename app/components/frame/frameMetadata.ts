// app/components/frame/frameMetadata.ts

import { getFrameMetadata } from '@coinbase/onchainkit';

import { titleButtons } from './buttons';
import { titleImageUrl } from './image';
import { frameInput } from './input';
import { framePostUrl } from './postURL';

export const frameMetadata = getFrameMetadata({   
  image: titleImageUrl,
  input: frameInput,
  buttons: titleButtons,
  postUrl: framePostUrl,
});
