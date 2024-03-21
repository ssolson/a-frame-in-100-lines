// app/components/frame/buttons.ts

import { FrameMetadataType } from '@coinbase/onchainkit';

export const titleButtons: FrameMetadataType['buttons'] = [
  {
    label: 'Go To Segment #',
  },
  {
    label: 'Next Segment',
  },
  {
    action: 'link',
    label: 'Google',
    target: 'https://www.google.com/search?q=cute+dog+pictures&tbm=isch&source=lnms',
  },
];

export const segmentButtons: FrameMetadataType['buttons'] = titleButtons;
