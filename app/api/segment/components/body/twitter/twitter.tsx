import { EnrichedTweet } from './src';
import { Tweet } from 'react-tweet/api';

import { TweetContainer } from './src/twitter-theme/tweet-container';
import { TweetHeader } from './src/twitter-theme/tweet-header';
import { TweetInReplyTo } from './src/twitter-theme/tweet-in-reply-to';
import { TweetBody } from './src/twitter-theme/tweet-body';
import { TweetMedia } from 'src/twitter-theme/tweet-media';

interface TweetComponentProps {
  tweet: EnrichedTweet;
  quotedTweet?: Tweet;
}

const TweetComponent: React.FC<TweetComponentProps> = ({ tweet, quotedTweet }) => {
  const formatDate = (dateString: string) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    } as const;
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDateToYYYYMMDDHHMM = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  console.log('tweet', tweet.entities);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '25px',
        marginTop: 'auto',
        marginBottom: 'auto',
      }}
    >
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
        {/* {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />} */}
        <TweetBody tweet={tweet} />
        {/* {tweet.mediaDetails?.length ? <TweetMedia tweet={tweet} components={components} /> : null} */}
      </TweetContainer>
    </div>
  );
};
export default TweetComponent;
