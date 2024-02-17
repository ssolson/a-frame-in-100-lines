// app/utils/getMessageInput.ts

import { FrameValidationData  } from '@coinbase/onchainkit';

// Utility function to extract segment number
export function getMessageInput(message: FrameValidationData | undefined ): string | undefined {
  if (message?.input) {
    return message.input;
  }
  return undefined;
}
