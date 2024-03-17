import type { EnrichedTweet } from '../utils.js';

export const TweetBody = ({ tweet }: { tweet: EnrichedTweet }) => (
  <p
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      fontSize: '1.25rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
      margin: '0',
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      color: 'white',
      // backgroundColor: 'black',
    }}
  >
    {tweet.entities.map((item, i) => {
      switch (item.type) {
        case 'hashtag':
        case 'mention':
        case 'url':
        case 'symbol':
          return (
            <span
              style={{
                // display: 'flex',
                color: 'rgb(0, 111, 214)',
              }}
            >
              {item.text}
            </span>
          );
        case 'media':
          // Media text is currently never displayed, some tweets however might have indices
          // that do match `display_text_range` so for those cases we ignore the content.
          return;
        default:
          // We use `dangerouslySetInnerHTML` to preserve the text encoding.
          // https://github.com/vercel-labs/react-tweet/issues/29
          // return <span key={i} dangerouslySetInnerHTML={{ __html: item.text }} />;
          return (
            <span style={{ marginRight: '1px' }} key={i}>
              {item.text}
            </span>
          );
      }
    })}
  </p>
);
