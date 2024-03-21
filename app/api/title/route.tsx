// app/api/title/route.tsx

import { ImageResponse } from 'next/og';
import { NextRequest, NextResponse } from 'next/server';

import getEpisodeData from '../../utils/dbUtils';
import { EpisodeProps } from '../../../types';
import SegmentHeader from './components/header';
import SegmentBody from './components/body';
import EpisodeFooter from './components/footer';

import { fetchFontArrayBuffer, arrayBufferToBase64, fontFiles } from '../segment/utils/fontUtils';
import { fetchImageArrayBuffer, imageFiles } from '../segment/utils/imageUtils';

export async function GET(req: NextRequest) {
  // FONTS
  const robotoRegular = await fetchFontArrayBuffer(fontFiles.robotoRegularFile);
  const robotoBold = await fetchFontArrayBuffer(fontFiles.robotoBoldFile);
  const robotoMedium = await fetchFontArrayBuffer(fontFiles.robotoMediumFile);
  const robotoLight = await fetchFontArrayBuffer(fontFiles.robotoLightFile);

  // IMAGES
  const TDGLogoFile = await fetchImageArrayBuffer(imageFiles.TDGLogoFile);
  const TLDLLogo = await fetchImageArrayBuffer(imageFiles.TLDLLogo);

  const TDGLogo = arrayBufferToBase64(TDGLogoFile);
  const TLDLLogoBase64 = arrayBufferToBase64(TLDLLogo);

  const { searchParams } = new URL(req.url);
  const episodeNumberStr = searchParams.get('episode_number');

  if (episodeNumberStr) {
    let episodeDataResult;
    let episodeNumberInt;
    if (episodeNumberStr === 'latest') {
      episodeDataResult = await getEpisodeData();
    } else {
      const episodeNumberInt = parseInt(episodeNumberStr, 10);
      episodeDataResult = await getEpisodeData(episodeNumberInt);
    }
    if (!episodeDataResult) {
      return NextResponse.json({ status: 404, message: 'Data not found' });
    }

    const episodeData: EpisodeProps = episodeDataResult as unknown as EpisodeProps;

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
          <SegmentHeader episodeData={episodeData} TDGLogo={TDGLogo} />
          <SegmentBody episodeData={episodeData} TLDLLogo={TLDLLogoBase64} />
          <EpisodeFooter episodeData={episodeData} imageBase64={TDGLogo} />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Roboto',
            data: robotoRegular,
          },
          {
            name: 'RobotoBold',
            data: robotoBold,
          },
          {
            name: 'RobotoMedium',
            data: robotoMedium,
          },
          {
            name: 'RobotoLight',
            data: robotoLight,
          },
        ],
      },
    );
  } else {
    return NextResponse.json({ status: 400, message: 'Bad Request' });
  }
}
export const dynamic = 'force-dynamic';
