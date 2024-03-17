// app/api/segment/route.tsx

import React from 'react';

import SegmentHeader from './components/header';
import SegmentBody from './components/body/body';
import EpisodeFooter from './components/footer';

import { ImageResponse } from 'next/og';
import { NextRequest, NextResponse } from 'next/server';

import { fetchFontArrayBuffer, arrayBufferToBase64, fontFiles } from './utils/fontUtils';
import { fetchImageArrayBuffer, imageFiles } from './utils/imageUtils';
import {
  fetchAndPrepareEpisodeData,
  validateSegmentNumber,
  extractSegmentData,
} from './utils/episodeUtils';
import { fetchTweetById, extractTweetIdFromUrl } from './utils/tweetUtils';

import { enrichTweet } from 'react-tweet';

export async function GET(req: NextRequest) {
  // FONTS
  const robotoRegular = await fetchFontArrayBuffer(fontFiles.robotoRegularFile);
  const robotoBold = await fetchFontArrayBuffer(fontFiles.robotoBoldFile);
  const robotoMedium = await fetchFontArrayBuffer(fontFiles.robotoMediumFile);
  const robotoLight = await fetchFontArrayBuffer(fontFiles.robotoLightFile);

  // IMAGES
  const TDGLogoFile = await fetchImageArrayBuffer(imageFiles.TDGLogoFile);
  const TLDLLogo = await fetchImageArrayBuffer(imageFiles.TLDLLogo);
  const TLDLWideData = await fetchImageArrayBuffer(imageFiles.TLDLWide);

  const TDGLogo = arrayBufferToBase64(TDGLogoFile);
  const TLDLLogoBase64 = arrayBufferToBase64(TLDLLogo);
  const TLDLWideBase64 = arrayBufferToBase64(TLDLWideData);

  // Episode & Segment
  const { searchParams } = new URL(req.url);
  const episodeNumberStr = searchParams.get('episode_number');
  const segmentNumberStr = searchParams.get('segment_number');

  const episodeData = await fetchAndPrepareEpisodeData(episodeNumberStr);

  if (!episodeData) {
    return NextResponse.json({ status: 404, message: 'Episode data not found' });
  }

  if (!validateSegmentNumber(segmentNumberStr, episodeData)) {
    return NextResponse.json({ status: 404, message: 'Segment data not found' });
  }
  const segmentData = extractSegmentData(segmentNumberStr!, episodeData);

  // Make OG Image
  if (segmentData) {
    // Tweet or TLDL?
    const tweetId = extractTweetIdFromUrl(segmentData.URL[0]);
    let tweet = undefined;
    let quotedTweet = undefined;
    if (tweetId) {
      const tweetData = await fetchTweetById(tweetId);
      tweet = tweetData.tweet;
      if (tweet) {
        tweet = enrichTweet(tweet);
      }
      quotedTweet = tweetData.quotedTweet;
    }

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '630px',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'black',
            backgroundSize: '1200px 630px',
            position: 'relative',
          }}
        >
          {/* Background Image Container */}
          <div
            style={{
              position: 'absolute',
              top: 60,
              left: 0,
              height: '100%',
              width: '100%',
              backgroundImage: `url(data:image/png;base64,${TLDLWideBase64})`,
              backgroundSize: '1200px 630px',
              backgroundColor: 'rgba(1,0,0, 0.0)',
              opacity: 0.0,
              zIndex: -1,
            }}
          ></div>

          {/* Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '630px',
              // height: '100%',
              // paddingLeft: '20px',
              // paddingRight: '20px',
              paddingBottom: '0px',
            }}
          >
            {/* HEADER */}
            <SegmentHeader segmentData={segmentData} episodeData={episodeData} />

            {/* DOG EAR */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100px',
                height: '100px',
                position: 'absolute',
                top: '0px',
                right: '0px',
                clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                backgroundColor: 'rgba(35,35,35,0.9)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  position: 'absolute',
                  transform: 'rotate(45deg)',
                  transformOrigin: 'center',
                  top: '20px',
                  right: '13px',
                  fontFamily: '"RobotoMedium"',
                  fontSize: '18px',
                  color: 'white',
                }}
              >
                {segmentData.segment_number} of {episodeData.episode_data.length}
              </div>
            </div>

            {/* BODY */}
            <SegmentBody
              segmentData={segmentData}
              tweet={tweet}
              quotedTweet={quotedTweet}
              TLDLLogo={TLDLLogoBase64}
            />

            {/* FOOTER */}
            <EpisodeFooter episodeData={episodeData} imageBase64={TDGLogo} />
          </div>
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
    return NextResponse.json({
      status: 400,
      message: 'Bad Request: Missing episode or segment number',
    });
  }
}
export const dynamic = 'force-dynamic';
