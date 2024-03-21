import React from 'react';

import { EpisodeProps } from '../../../../types';

interface EpisodeFooterProps {
  episodeData: EpisodeProps;
  imageBase64: string;
}

const EpisodeFooter: React.FC<EpisodeFooterProps> = ({ episodeData, imageBase64 }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '28',
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'right',
        width: '100%',
        height: '65px',
        minHeight: '65px',
        maxHeight: '65px',
        paddingLeft: '15px',
        paddingRight: '15px',
        // backgroundColor: 'slategray',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            display: 'flex',
            borderRight: '1.5px solid rgb(249, 24, 128)',
            paddingRight: '8px',
            fontFamily: '"Roboto"',
          }}
        >
          {`${episodeData.episode_date.toString().substring(0, 4)}.${episodeData.episode_date.toString().substring(4, 6)}.${episodeData.episode_date.toString().substring(6, 8)}`}
        </div>
        <div
          style={{
            display: 'flex',
            paddingLeft: '5px',
            color: 'rgb(249, 24, 128)',
            fontFamily: '"RobotoBold"',
          }}
        >
          TLDL
        </div>
      </div>
    </div>
  );
};

export default EpisodeFooter;
