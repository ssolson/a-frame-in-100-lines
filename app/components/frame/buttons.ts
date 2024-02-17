// app/components/frame/buttons.ts

import { FrameMetadataType } from '@coinbase/onchainkit';

export const titleButtons: FrameMetadataType['buttons'] = [
    {
      label: 'Go To Segment #',
    },
    {
      label: 'Next Segment',
    },
  ]

  export const segmentButtons: FrameMetadataType['buttons'] = titleButtons;