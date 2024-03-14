import type { EnrichedTweet } from '../utils.js';
import { TweetLink } from './tweet-link';
import s from './tweet-body.module.css';

export const TweetBody = ({ tweet }: { tweet: EnrichedTweet }) => (
  <p
    style={{
      display: 'flex',
      fontSize: '1.25rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      margin: '0',
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      color: 'white',
      // backgroundColor: 'blue',
    }}
  >
    {tweet.entities.map((item, i) => {
      console.log('item', item);
      switch (item.type) {
        case 'hashtag':
        case 'mention':
        case 'url':
        case 'symbol':
          return (
            <TweetLink key={i} href={item.href}>
              {item.text}
            </TweetLink>
          );
        case 'media':
          // Media text is currently never displayed, some tweets however might have indices
          // that do match `display_text_range` so for those cases we ignore the content.
          return;
        default:
          console.log('DEAFULT: item.text', item.text);
          // We use `dangerouslySetInnerHTML` to preserve the text encoding.
          // https://github.com/vercel-labs/react-tweet/issues/29
          // return <span key={i} dangerouslySetInnerHTML={{ __html: item.text }} />;
          return <span key={i}>{item.text}</span>;
      }
    })}
  </p>
);
