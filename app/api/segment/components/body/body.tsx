import { SegmentProps } from '../../../../../types';

import Bullets from './bullets';
import TweetComponent from './twitter/twitter';

import { EnrichedTweet } from './twitter/src/utils';

interface SegmentBodyProps {
  segmentData: SegmentProps;
  tweet?: EnrichedTweet;
  quotedTweet?: EnrichedTweet;
  TLDLLogo: string;
}

const SegmentBody: React.FC<SegmentBodyProps> = ({ segmentData, tweet, quotedTweet, TLDLLogo }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '475px',
        maxHeight: '475px',
        minHeight: '475px',
        flexDirection: 'column',
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {/* Bullet Points & Twitter*/}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          margin: 'auto',
          color: 'white',
          fontSize: 30,
          textAlign: 'justify',
        }}
      >
        {/* Bullet Points */}
        <Bullets segmentData={segmentData} />

        {/* Twitter Card */}
        {tweet ? (
          <TweetComponent tweet={tweet} quotedTweet={quotedTweet} />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              // padding: '10px',
              height: '100%',
              alignContent: 'center',
              justifyContent: 'center',
              paddingLeft: '50px',
            }}
          >
            <img
              width="55%"
              src={`data:image/png;base64,${TLDLLogo}`}
              style={{
                borderRadius: 90,
              }}
              alt="Episode"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SegmentBody;
