import type { EnrichedTweet } from '../utils.js';
import { format } from 'date-fns';

export const TweetInfo = ({ tweet }: { tweet: EnrichedTweet }) => {
  const createdAt = new Date(tweet.created_at);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 'auto',
        // overflowWrap: 'break-word',
        // whiteSpace: 'nowrap',
        // textOverflow: 'ellipsis',
      }}
    >
      <a
        style={{
          fontSize: '0.7rem',
          // lineHeight: '1.25rem',
          color: 'rgb(83, 100, 113)',
        }}
      >
        <time dateTime={createdAt.toISOString()}>{format(createdAt, 'MMM d, y')}</time>
      </a>
    </div>
  );
};
