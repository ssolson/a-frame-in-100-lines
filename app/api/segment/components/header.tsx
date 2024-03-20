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
        height: '90px',
        minHeight: '90px',
        maxHeight: '90px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        color: 'white',
        fontSize: '34px',
        paddingLeft: '20px',
        paddingRight: '20px',
        // backgroundColor: 'slategray',
      }}
    >
      {/* Segment Title */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          borderLeft: '5px solid rgb(249, 24, 128)',
          paddingLeft: '13px',
          // marginTop: '20px',
        }}
      >
        <div
          style={{
            fontFamily: '"RobotoLight"',
            textWrap: 'balance',
            fontWeight: 'bold',
            fontSize: '36px',
            textAlign: 'start',
            paddingRight: '100px',
          }}
        >
          {segmentData.segment_title}
        </div>
      </div>
    </div>
  );
};

export default SegmentHeader;
