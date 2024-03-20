import { format } from 'date-fns';
import type { EnrichedTweet } from '../utils.js';

export const TweetInfoCreatedAt = ({ tweet }: { tweet: EnrichedTweet }) => {
  // If the date is displayed immediately, it will produce a server/client mismatch because the date
  // format will change depending on the user's browser. If the format were to be simplified to
  // something like "MMM d, y", then you could use the server date.
  const createdAt = new Date(tweet.created_at);

  return !createdAt ? null : (
    <a
      style={{
        textDecoration: 'none',
        fontSize: '0.9375rem',
        lineHeight: '1.25rem',
        color: 'rgb(83, 100, 113)',
      }}
    >
      <time dateTime={createdAt.toISOString()}>{format(createdAt, 'MMM d, y')}</time>
    </a>
  );
};
