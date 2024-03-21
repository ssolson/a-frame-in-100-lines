import React from 'react';
import { EpisodeProps } from '../../../../types';

interface SegmentBodyProps {
  episodeData: EpisodeProps;
  TLDLLogo?: string;
}

const SegmentBody: React.FC<SegmentBodyProps> = ({ episodeData, TLDLLogo }) => {
  const { episode_data } = episodeData;

  // Calculate split for segments if necessary.
  const splitIndex = episode_data.length > 9 ? Math.ceil(episode_data.slice(1).length / 2) : 0;

  return (
    <div
      style={{
        display: 'flex',
        height: '475px',
        maxHeight: '475px',
        minHeight: '475px',
        width: '98%',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        paddingLeft: '20px',
        paddingRight: '20px',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Bullet Points Columns */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          color: 'white',
          fontSize: 32,
        }}
      >
        {/* Column 1: Bullet Points */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: splitIndex ? '45%' : '65%',
          }}
        >
          {episode_data.slice(1, splitIndex ? splitIndex + 1 : undefined).map((segment, index) => (
            <div
              key={index + 1}
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '5px 0',
                borderRadius: '10px',
                boxSizing: 'border-box',
              }}
            >
              {/* Index  */}
              <div
                style={{
                  display: 'flex',
                  height: '40px',
                  width: '40px',
                  minWidth: '40px',
                  border: '1px solid rgb(249, 24, 128)',
                  borderRadius: '7px',
                  color: 'rgb(249, 24, 128)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '10px',
                  fontFamily: 'RobotoBold',
                }}
              >
                {index + 1}
              </div>

              {/* Segment Title */}
              <div
                style={{
                  display: 'flex',
                  borderRadius: '7px',
                  padding: '2px',
                  background: 'linear-gradient(to right, rgba(249, 24, 128, 0.7), transparent)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    textAlign: 'justify',
                    flexGrow: 1,
                    borderRadius: '6px', // Slightly smaller radius for the inner div to fit inside the "border"
                    padding: '5px',
                    paddingLeft: '7px',
                    background: 'linear-gradient(to right, rgba(35,35,35), transparent)',
                    width: '95%', // Ensure it fills the wrapper
                    boxSizing: 'border-box', // Keeps padding inside width & height calculations
                  }}
                >
                  {segment.segment_title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Bullet Points or Card */}
        {splitIndex > 0 ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '50%',
              padding: '0 10px 0 0',
              // backgroundColor: 'slategray',
            }}
          >
            {episode_data.slice(splitIndex + 1).map((segment, index) => (
              <div
                key={index + splitIndex + 1}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: '5px 0',
                  borderRadius: '10px',
                  boxSizing: 'border-box',
                }}
              >
                {/* Index  */}
                <div
                  style={{
                    height: '40px',
                    width: '40px',
                    minWidth: '40px',
                    border: '1px solid rgb(249, 24, 128)',
                    borderRadius: '7px',
                    color: 'rgb(249, 24, 128)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '10px',
                    fontFamily: 'RobotoBold',
                  }}
                >
                  {index + splitIndex + 1}
                </div>

                {/* Segment Title */}
                <div
                  style={{
                    display: 'flex',
                    borderRadius: '7px',
                    padding: '2px', // This acts as the border width
                    background: 'linear-gradient(to right, rgba(249, 24, 128, 0.7), transparent)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',

                      borderRadius: '6px', // Slightly smaller radius for the inner div to fit inside the "border"
                      padding: '5px',
                      paddingLeft: '7px',
                      background: 'linear-gradient(to right, rgba(35,35,35), transparent)',
                      // background: 'rgba(35,35,35)',
                      width: '95%', // Ensure it fills the wrapper
                      boxSizing: 'border-box', // Keeps padding inside width & height calculations
                    }}
                  >
                    {segment.segment_title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              alignContent: 'center',
              justifyContent: 'center',
              paddingLeft: '50px',
              width: '35%',
            }}
          >
            <img
              //   width="50%"
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
