// app/api/segment/route.tsx

import { ImageResponse } from 'next/og';
import { EpisodeProps, SegmentProps } from '../../../types';

import { NextRequest, NextResponse } from 'next/server';
import getEpisodeData from '../../utils/dbUtils';

export async function GET(req: NextRequest) {
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
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'black',
            backgroundSize: '100px 100px',
            position: 'relative', // Add this to position your ep number and title
          }}
        >
          {/* Episode Number, Title, and date */}
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              top: 0, // Align to the top
              left: 0, // Align to the left
              color: 'white', // Text color
              padding: '10px',
              textAlign: 'left',
              fontSize: '28px',
            }}
          >
            {episodeData.episode_number}: {episodeData.episode_title}
          </div>

          {/* Episode Date */}
          <div
            style={{
              position: 'absolute', // Position it absolutely
              top: '10px', // Align to the top
              right: '10px', // Align to the right
              display: 'flex',
              fontSize: '28px', // Adjust font size as needed
              fontStyle: 'normal',
              color: 'white',
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
              textAlign: 'right', // Align text to the right
            }}
          >
            <div style={{ display: 'flex', fontSize: '22px' }}>
              {`${episodeData.episode_date.toString().substring(0, 4)}/${episodeData.episode_date.toString().substring(4, 6)}/${episodeData.episode_date.toString().substring(6, 8)}`}
            </div>
          </div>

          {/* Segment Title */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              fontSize: 42,
              fontStyle: 'normal',
              color: 'white',
              marginTop: 30,
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
              textAlign: 'left',
            }}
          >
            <b style={{ textDecoration: 'underline', textDecorationSkipInk: 'auto' }}>
              {segmentData.segment_title}
            </b>
          </div>

          {/* Bullet Points */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column', // Stack the bullet points vertically
              alignItems: 'flex-start',
              color: 'white',
              textAlign: 'left',
              fontSize: 30,
            }}
          >
            {segmentData.bullets.map((bullet, index) => (
              <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
                - {bullet}
              </div>
            ))}
          </div>

          {/* Segment Number / Total Segment Number */}
          <div
            style={{
              position: 'absolute', // Position it absolutely
              bottom: '10px', // Align to the bottom
              right: '10px', // Align to the right
              display: 'flex',
              fontSize: '28px', // Adjust font size as needed
              fontStyle: 'normal',
              color: 'white',
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
              textAlign: 'right', // Align text to the right
            }}
          >
            <b>
              {segmentData.segment_number}/{episodeData.episode_data.length}
            </b>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
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
