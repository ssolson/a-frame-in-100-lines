import React from 'react';

import { EpisodeProps } from '../../../../types';

interface SegmentHeaderProps {
  episodeData: EpisodeProps;
  TDGLogo: string;
}

const SegmentHeader: React.FC<SegmentHeaderProps> = ({ episodeData, TDGLogo }) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
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
      <img
        width="60"
        height="60"
        src={`data:image/jpeg;base64,${TDGLogo}`}
        style={{
          marginLeft: '45px',
          borderRadius: 128,
        }}
        alt="Episode"
      />
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          //   borderLeft: '5px solid rgb(249, 24, 128)',
          paddingTop: '5px',
          paddingBottom: '5px',
          //   paddingLeft: '13px',
          //   backgroundColor: 'slategray',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '36px',
            textAlign: 'start',
            // paddingRight: '100px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            marginLeft: '10px',
            fontFamily: 'RobotoBold',
            // borderBottom: '3px solid rgb(249, 24, 128)',
          }}
        >
          {episodeData.episode_number} ·
        </div>
        <div
          style={{
            display: 'flex',
            fontFamily: '"RobotoLight"',
            fontSize: '36px',
            textAlign: 'start',
            // paddingRight: '100px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            marginLeft: '10px',
            borderBottom: '3px solid rgb(249, 24, 128)',
          }}
        >
          {' '}
          {episodeData.episode_title}
        </div>
      </div>
    </div>
  );
};

export default SegmentHeader;
