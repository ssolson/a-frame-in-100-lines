import type { ReactNode } from 'react';
import type { EnrichedQuotedTweet } from '../../utils.js';

type Props = { tweet: EnrichedQuotedTweet; children: ReactNode };

export const QuotedTweetContainer = ({ tweet, children }: Props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
      border: '1px solid rgb(66, 83, 100)',
      borderRadius: '12px',
      margin: '0.75rem 0',
      // transitionProperty: 'background-color, box-shadow',
      // transitionDuration: '0.2s',
      // cursor: 'pointer',
      height: '60%',
      // backgroundColor: 'blue',
    }}
  >
    <article
      style={{
        display: 'flex',
        position: 'relative',
        boxSizing: 'inherit',
        flexDirection: 'column',
      }}
    >
      {children}
    </article>
  </div>
);
