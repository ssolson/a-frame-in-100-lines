import { EnrichedTweet } from './src';
import { Tweet } from 'react-tweet/api';

import { TweetContainer } from './src/twitter-theme/tweet-container';
import { TweetHeader } from './src/twitter-theme/tweet-header';
import { TweetInReplyTo } from './src/twitter-theme/tweet-in-reply-to';
import { TweetBody } from './src/twitter-theme/tweet-body';
import { TweetMedia } from './src/twitter-theme/tweet-media';
import { QuotedTweet } from './src/twitter-theme/quoted-tweet';
import { TweetInfo } from './src/twitter-theme/tweet-info';
import { TweetActions } from './src/twitter-theme/tweet-actions';

interface TweetComponentProps {
  tweet: EnrichedTweet;
  quotedTweet?: EnrichedTweet;
}

const TweetComponent: React.FC<TweetComponentProps> = ({ tweet, quotedTweet }) => {
  return (
    <TweetContainer>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{
          display: 'flex',
          width: '23.75px',
          height: '23.75px',
          position: 'absolute',
          top: '20px',
          right: '20px',
        }}
      >
        <g>
          <path
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            style={{ fill: '#fff' }}
          ></path>
        </g>
      </svg>
      <TweetHeader tweet={tweet} />
      <div
        style={{ display: 'flex', maxHeight: '350px', flexDirection: 'column', overflow: 'hidden' }}
      >
        {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
        <TweetBody tweet={tweet} />
        {tweet.mediaDetails?.length ? <TweetMedia tweet={tweet} /> : null}
        {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}
      </div>
      <TweetActions tweet={tweet} />
    </TweetContainer>
  );
};
export default TweetComponent;
