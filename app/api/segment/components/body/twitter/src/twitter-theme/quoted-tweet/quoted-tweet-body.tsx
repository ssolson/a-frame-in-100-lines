import type { EnrichedQuotedTweet } from '../../utils.js';
import s from './quoted-tweet-body.module.css';

type Props = { tweet: EnrichedQuotedTweet };

export const QuotedTweetBody = ({ tweet }: Props) => (
  <p
    style={{
      fontSize: '0.938rem',
      fontWeight: '400',
      lineHeight: '1.25rem',
      margin: '0.25rem 0 0.75rem 0',
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      padding: '0 0.75rem',
      // backgroundColor: 'blue',
    }}
  >
    {tweet.entities.map((item, i) => (
      // <span key={i} dangerouslySetInnerHTML={{ __html: item.text }} />
      <span style={{ marginRight: '1px' }} key={i}>
        {item.text}
      </span>
    ))}
  </p>
);
