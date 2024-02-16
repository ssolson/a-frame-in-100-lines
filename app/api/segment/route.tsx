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
    const episodeNumberInt = parseInt(episodeNumberStr, 10);
    const segmentNumberInt = parseInt(segmentNumberStr, 10);
    const episodeDataResult = await getEpisodeData(episodeNumberInt);

    if (!episodeDataResult) {
      return NextResponse.json({ status: 404, message: 'Data not found' });
    }

    const episodeData: EpisodeProps = episodeDataResult as unknown as EpisodeProps;

    // Validate segment number
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
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 40,
              fontStyle: 'normal',
              color: 'white',
              marginTop: 30,
              lineHeight: 1.8,
              whiteSpace: 'pre-wrap',
            }}
          >
            <b>{segmentData.segment_title}</b>
          </div>
          <div
            style={{
              display: 'flex', // This is crucial
              flexDirection: 'column', // Stack the bullet points vertically
              alignItems: 'flex-start', // Align items to the flex-start (left) within this div
              color: 'white',
              textAlign: 'left', // Align the text to the left
            }}
          >
            {segmentData.bullets.map((bullet, index) => (
              <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
                - {bullet}
              </div>
            ))}
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
