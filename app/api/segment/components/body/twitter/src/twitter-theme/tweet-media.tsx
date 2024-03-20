import { Fragment } from 'react';
import { type EnrichedTweet, type EnrichedQuotedTweet, getMediaUrl } from '../utils';

import { MediaDetails } from '../api/index.js';
import type { TwitterComponents } from './types.js';
import { TweetMediaVideo } from './tweet-media-video';
// import { MediaImg } from './media-img';
import s from './tweet-media.module.css';

const getSkeletonStyle = (media: MediaDetails, itemCount: number) => {
  let paddingBottom = 56.25; // default of 16x9

  // if we only have 1 item, show at original ratio
  if (itemCount === 1)
    paddingBottom = (100 / media.original_info.width) * media.original_info.height;

  // if we have 2 items, double the default to be 16x9 total
  if (itemCount === 2) paddingBottom = paddingBottom * 2;

  return {
    // width: media.type === 'photo' ? undefined : 'unset',
    paddingBottom: `${paddingBottom}%`,
  };
};

type Props = {
  tweet: EnrichedTweet | EnrichedQuotedTweet;
  components?: TwitterComponents;
  quoted?: boolean;
};

export const TweetMedia = ({ tweet, components, quoted }: Props) => {
  const length = tweet.mediaDetails?.length ?? 0;
  // const Img = components?.MediaImg ?? MediaImg;

  return (
    <div
      style={{
        display: 'flex',
        marginTop: '0.75rem',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '12px',
        maxHeight: '30%',
        width: '100%',
        border: '1px solid rgb(66, 83, 100)',
      }}
    >
      {/* TODO: TO HANDLE MEDIA GRID */}
      {/* <div
        className={clsx(
          s.mediaWrapper,
          length > 1 && s.grid2Columns,
          length === 3 && s.grid3,
          length > 4 && s.grid2x2,
        )}
      > */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          height: '100%',
          width: '100%',
        }}
      >
        {tweet.mediaDetails?.map((media) => (
          <Fragment key={media.media_url_https}>
            <div
              key={media.media_url_https}
              style={{
                display: 'flex',
                position: 'relative',
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                outlineStyle: 'none',
              }}
            >
              <img
                src={getMediaUrl(media, 'small')}
                style={{
                  // position: 'absolute',
                  // top: '0px',
                  // left: '0px',
                  // bottom: '0px',
                  // height: '100%',
                  // width: '100%',
                  // margin: '0',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
