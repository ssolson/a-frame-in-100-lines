import { SegmentProps } from '../../../../../types';

import { type Tweet } from 'react-tweet/api';
import Bullets from './bullets';
import TweetComponent from './twitter/twitter';

interface SegmentBodyProps {
  segmentData: SegmentProps;
  tweet?: Tweet;
  quotedTweet?: Tweet;
  TLDLLogo: string;
}

const SegmentBody: React.FC<SegmentBodyProps> = ({ segmentData, tweet, quotedTweet, TLDLLogo }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        fontStyle: 'normal',
        color: 'white',
        whiteSpace: 'pre-wrap',
        textAlign: 'start',
        height: 'auto',
        maxHeight: '70%',
        overflow: 'hidden',
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
          fontSize: 25,
          textAlign: 'justify',
        }}
      >
        {/* Bullet Points */}
        <Bullets segmentData={segmentData} />

        {/* Twitter Card */}
        {tweet ? (
          <TweetComponent tweet={tweet} quotedTweet={quotedTweet} />
        ) : (
          // <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '25px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '10px',
              // backgroundColor: '#2f3640',
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
