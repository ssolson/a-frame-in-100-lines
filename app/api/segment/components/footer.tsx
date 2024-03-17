import React from 'react';

import { EpisodeProps } from '../../../../types';

interface EpisodeFooterProps {
  episodeData: EpisodeProps;
  imageBase64: string;
}

const TLDLLogo = `${process.env.NEXT_PUBLIC_URL}/TLDL.png`;

const fetchFontArrayBuffer = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch the font: ${response.statusText}`);
  }
  return response.arrayBuffer();
};

const EpisodeFooter: React.FC<EpisodeFooterProps> = ({ episodeData, imageBase64 }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '22px',
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'right',
        width: '100%',
        height: '65px',
        minHeight: '65px',
        maxHeight: '65px',
        // position: 'absolute',
        // bottom: '0px',
        paddingLeft: '15px',
        paddingRight: '15px',
        // backgroundColor: 'slategray',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          fontFamily: '"RobotoLight"',
        }}
      >
        <img
          width="50"
          height="50"
          src={`data:image/jpeg;base64,${imageBase64}`}
          style={{
            borderRadius: 128,
            marginRight: '10px',
          }}
          alt="Episode"
        />

        <div
          style={{
            display: 'flex',
            borderBottom: '2px solid rgb(249, 24, 128)',
            paddingBottom: '5px',
          }}
        >
          {episodeData.episode_number}: {episodeData.episode_title}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '20px',
            borderRight: '1.5px solid rgb(249, 24, 128)',
            paddingRight: '8px',
            fontFamily: '"RobotoLight"',
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
