// import clsx from 'clsx';
import type { EnrichedTweet } from '../utils';
import type { TwitterComponents } from './types';
import { AvatarImg } from './avatar-img';
import s from './tweet-header.module.css';
import { VerifiedBadge } from './verified-badge';

type Props = {
  tweet: EnrichedTweet;
  components?: TwitterComponents;
};

export const TweetHeader = ({ tweet, components }: Props) => {
  const Img = components?.AvatarImg ?? AvatarImg;
  const { user } = tweet;
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: '85%',
        paddingBottom: '0.75rem',
        lineHeight: '1.25rem',
        fontSize: '0.9375rem',
        whiteSpace: 'nowrap',
        overflowWrap: 'break-word',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', position: 'relative', height: '48px', width: '48px' }}>
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',

            position: 'absolute',
            overflow: 'hidden',
            borderRadius: '9999px',
          }}
        >
          <Img src={user.profile_image_url_https} alt={user.name} width={48} height={48} />
        </div>
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            position: 'absolute',
            overflow: 'hidden',
            borderRadius: '9999px',
          }}
        >
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              transitionProperty: 'rgba(26, 26, 26, 0.15)',
              transitionDuration: '0.2s',
              boxShadow: 'rgb(0 0 0 / 3%) 0px 0px 2px inset',
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          // maxWidth: maxWidth,
          // max-width: calc(100% - 84px);
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '0 0.5rem',
        }}
      >
        <a
          href={tweet.url}
          style={{
            display: 'flex',
            textDecoration: 'none',
            color: 'white',
            alignItems: 'center',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{
              display: 'flex',
              fontWeight: 700,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <span title={user.name}>{user.name}</span>
          </div>
          {/* <VerifiedBadge user={user} className={s.authorVerified} /> */}
        </a>
        <div
          style={{
            display: 'flex',
          }}
        >
          <a
            href={tweet.url}
            style={{
              display: 'flex',
              color: 'rgb(83, 100, 113)',
              textDecoration: 'none',
              textOverflow: 'ellipsis',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span title={`@${user.screen_name}`}>@{user.screen_name}</span>
          </a>
          <div
            style={{
              display: 'flex',
            }}
          >
            <span
              style={{
                display: 'flex',
                padding: ' 0 0.25rem',
              }}
            >
              ·
            </span>
            <a
              href={user.follow_url}
              style={{
                display: 'flex',
                color: 'rgb(0, 111, 214)',
                textDecoration: 'none',
                fontWeight: 700,
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
