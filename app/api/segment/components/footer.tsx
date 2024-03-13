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
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '22px',
        fontStyle: 'normal',
        color: 'white',
        textAlign: 'right',
        width: '100%',
        height: '10%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
          {episodeData.episode_number}: {episodeData.episode_title}
        </div>

        <div style={{ display: 'flex', fontSize: '20px' }}>
          {`${episodeData.episode_date.toString().substring(0, 4)}.${episodeData.episode_date.toString().substring(4, 6)}.${episodeData.episode_date.toString().substring(6, 8)}`}
        </div>
      </div>
    </div>
  );
};

export default EpisodeFooter;
