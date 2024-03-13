import { EnrichedTweet } from './src';
import { Tweet } from 'react-tweet/api';

import { TweetContainer } from './src/twitter-theme/tweet-container';
import { TweetHeader } from './src/twitter-theme/tweet-header';
import { TweetInReplyTo } from './src/twitter-theme/tweet-in-reply-to';
import { TweetBody } from './src/twitter-theme/tweet-body';

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
    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '25px' }}>
      <TweetContainer>
        <TweetHeader tweet={tweet} />
        {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
        {/* <div style={{ display: 'flex', color: 'white', backgroundColor: 'blue' }}>
          {'boogers '}
          {tweet.entities[0].text}{' '}
        </div> */}
        <div style={{ display: 'flex', color: 'white', backgroundColor: 'blue' }}>{'boogers '}</div>

        {/* <TweetBody tweet={tweet} /> */}
      </TweetContainer>
    </div>
  );
};
export default TweetComponent;
