import type { MediaAnimatedGif, MediaVideo } from '../api/index.js';
import { EnrichedQuotedTweet, type EnrichedTweet, getMediaUrl, getMp4Video } from '../utils';
import mediaStyles from './tweet-media.module.css';
import s from './tweet-media-video.module.css';

type Props = {
  tweet: EnrichedTweet | EnrichedQuotedTweet;
  media: MediaAnimatedGif | MediaVideo;
};

export const TweetMediaVideo = ({ tweet, media }: Props) => {
  const mp4Video = getMp4Video(media);
  let timeout = 0;

  console.log('media', media);

  return (
    <>
      {/* <video
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          bottom: '0px',
          height: '100%',
          width: '100%',
          margin: '0',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        poster={getMediaUrl(media, 'small')}
        muted
      >
        <source src={mp4Video.url} type={mp4Video.content_type} />
      </video> */}
      <img
        // src={getMediaUrl(media, 'small')}
        src={
          'https://pbs.twimg.com/ext_tw_video_thumb/1767176821261377536/pu/img/gmUzYkOYHgW75_GO.jpg'
        }
        // alt={media.ext_alt_text || 'Image'}
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          bottom: '0px',
          height: '100%',
          width: '100%',
          margin: '0',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      {/* {playButton && (
        <button
          type="button"
          className={s.videoButton}
          aria-label="View video on Twitter"
          onClick={(e) => {
            const video = e.currentTarget.previousSibling as HTMLMediaElement

            e.preventDefault()
            setPlayButton(false)
            setIsPlaying(true)
            video.play()
            video.focus()
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className={s.videoButtonIcon}
            aria-hidden="true"
          >
            <g>
              <path d="M21 12L4 2v20l17-10z"></path>
            </g>
          </svg>
        </button>
      )} */}

      {/* {!isPlaying && !ended && (
        <div className={s.watchOnTwitter}>
          <a
            href={tweet.url}
            className={s.anchor}
            target="_blank"
            rel="noopener noreferrer"
          >
            {playButton ? 'Watch on Twitter' : 'Continue watching on Twitter'}
          </a>
        </div>
      )} */}

      {/* {ended && (
        <a
          href={tweet.url}
          className={clsx(s.anchor, s.viewReplies)}
          target="_blank"
          rel="noopener noreferrer"
        >
          View replies
        </a>
      )} */}
    </>
  );
};
