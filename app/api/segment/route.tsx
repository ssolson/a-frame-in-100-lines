// app/api/segment/route.tsx

import { ImageResponse } from 'next/og';
import { EpisodeProps, SegmentProps } from '../../../types';

import { NextRequest, NextResponse } from 'next/server';
import getEpisodeData from '../../utils/dbUtils';
import React from 'react';

import { registerFont } from 'canvas';
// registerFont('/fonts/robot/Roboto-Regular.ttf', { family: 'Roboto' });

import fetch from 'node-fetch';

// This URL should be the direct link to the actual font file (e.g., .woff2, .ttf)
const fontFileUrl = `${process.env.NEXT_PUBLIC_URL}/fonts/roboto/Roboto-Bold.ttf`;

const fetchFontArrayBuffer = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch the font: ${response.statusText}`);
  }
  return response.arrayBuffer();
};

export async function GET(req: NextRequest) {
  const fontArrayBuffer = await fetchFontArrayBuffer(fontFileUrl);

  const { searchParams } = new URL(req.url);
  const episodeNumberStr = searchParams.get('episode_number');
  const segmentNumberStr = searchParams.get('segment_number');

  if (episodeNumberStr && segmentNumberStr) {
    let episodeDataResult;
    if (episodeNumberStr === 'latest') {
      episodeDataResult = await getEpisodeData();
    } else if (episodeNumberStr) {
      const episodeNumberInt = parseInt(episodeNumberStr, 10);
      episodeDataResult = await getEpisodeData(episodeNumberInt);
    }
    if (!episodeDataResult) {
      return NextResponse.json({ status: 404, message: 'Data not found' });
    }

    // Set episode data type
    let episodeData: EpisodeProps = episodeDataResult as unknown as EpisodeProps;

    // Modify episode_data property to exclude Introductory song
    episodeData = {
      ...episodeData,
      episode_data: episodeData.episode_data.slice(1),
    };

    // Validate segment number
    const segmentNumberInt = parseInt(segmentNumberStr, 10);
    if (segmentNumberInt <= 0 || segmentNumberInt > episodeData.episode_data.length) {
      return NextResponse.json({ status: 404, message: 'Segment data not found' });
    }

    // Extract the specific segment data
    const segmentData: SegmentProps = episodeData.episode_data[segmentNumberInt - 1];

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            backgroundColor: 'black',
            border: '5px solid black',
          }}
        >
          {/* Episode Number, Title, Date*/}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(0,0,0)',
              alignItems: 'center',
              width: '100%',
              color: 'white',
              padding: '10px',
              fontSize: '28px',
            }}
          >
            <div style={{ display: 'flex' }}>
              {episodeData.episode_number}: {episodeData.episode_title}
            </div>

            <div style={{ display: 'flex', fontSize: '20px' }}>
              {`${episodeData.episode_date.toString().substring(0, 4)}.${episodeData.episode_date.toString().substring(4, 6)}.${episodeData.episode_date.toString().substring(6, 8)}`}
            </div>
          </div>

          {/* Segment Title & Bullets */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'flex-start',
              fontSize: 42,
              fontStyle: 'normal',
              // backgroundColor: 'rgba(85, 9, 139)',
              color: 'white',
              whiteSpace: 'pre-wrap',
              textAlign: 'left',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            {/* Segment Title  */}
            <div
              style={{
                display: 'flex',
                height: '25%',
                textAlign: 'left',
                alignItems: 'center',
                backgroundColor: 'rgba(85, 9, 139)',
                paddingLeft: '20px',
                paddingRight: '20px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
              }}
            >
              <b> {segmentData.segment_title}</b>
            </div>

            {/* Bullet Points */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '75%',
                alignItems: 'center',
                color: 'white',
                textAlign: 'left',
                fontSize: 30,
                paddingLeft: '30px',
                paddingRight: '30px',
              }}
            >
              {segmentData.bullets.map((bullet, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    marginBottom: '10px',
                    textAlign: 'justify',
                    textJustify: 'inter-word',
                  }}
                >
                  - {bullet}
                </div>
              ))}
            </div>
          </div>

          {/* Segment Number / Total Segment Number */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: '10px',
              fontSize: '28px',
              fontStyle: 'normal',
              color: 'white',
              // backgroundColor: 'rgba(25, 10, 10)',
              textAlign: 'right',
              width: '100%',
              height: '55px',
            }}
          >
            {segmentData.segment_number}/{episodeData.episode_data.length}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Roboto',
            data: fontArrayBuffer,
          },
        ],
      },
    );
  } else {
    return NextResponse.json({
      status: 400,
      message: 'Bad Request: Missing episode or segment number',
    });
  }
}
export const dynamic = 'force-dynamic';
