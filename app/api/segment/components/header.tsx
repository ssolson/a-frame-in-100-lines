import React from 'react';

import { EpisodeProps, SegmentProps } from '../../../../types';

interface SegmentHeaderProps {
  segmentData: SegmentProps;
  episodeData: EpisodeProps;
}

const SegmentHeader: React.FC<SegmentHeaderProps> = ({ segmentData, episodeData }) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        color: 'white',
        fontSize: '28px',
      }}
    >
      {/* Segment Title */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            fontFamily: '"RobotoMedium"',
            fontWeight: 'bold',
            fontSize: '36px',
            textAlign: 'center',
            paddingRight: '100px',
          }}
        >
          {segmentData.segment_title}
        </div>
      </div>

      {/* Dog Ear and Segment Number */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          position: 'absolute',
          top: '-20px',
          right: '-20px',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100px',
            height: '100px',
            backgroundColor: 'rgba(35,35,35,0.9)',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            transform: 'rotate(45deg)',
            transformOrigin: 'bottom right',
            top: '42px',
            right: '25px',
            fontFamily: '"RobotoMedium"',
            fontWeight: 'bold',
            fontSize: '18px',
            color: 'white',
          }}
        >
          {segmentData.segment_number} of {episodeData.episode_data.length}
        </div>
      </div>
    </div>
  );
};

export default SegmentHeader;
