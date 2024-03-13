import type { EnrichedTweet } from '../utils.js';
import s from './tweet-in-reply-to.module.css';

export const TweetInReplyTo = ({ tweet }: { tweet: EnrichedTweet }) => (
  <a
    href={tweet.in_reply_to_url}
    style={{
      display: 'flex',
      textDecoration: 'none',
      color: 'rgb(139, 152, 165)',
      fontSize: '0.9375rem',
      lineHeight: '1.25rem',
      marginBottom: '0.25rem',
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap',
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    Replying to @{tweet.in_reply_to_screen_name}
  </a>
);
