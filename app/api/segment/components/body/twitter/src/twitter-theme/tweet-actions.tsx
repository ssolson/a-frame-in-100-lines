import { type EnrichedTweet, formatNumber } from '../utils';
import { format } from 'date-fns';

export const TweetActions = ({ tweet }: { tweet: EnrichedTweet }) => {
  const favoriteCount = formatNumber(tweet.favorite_count);

  const createdAt = new Date(tweet.created_at);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'rgb(83, 100, 113)',
        paddingTop: '0.25rem',
        marginTop: '0.25rem',
        borderTop: ' 1px solid rgba(207, 217, 222, 0.4)',
        overflowWrap: 'break-word',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: '0.7rem',
        height: '20px',
        // backgroundColor: 'rgb(100, 32, 43)',
      }}
    >
      {/* Likes */}
      <div
        style={{
          textDecoration: 'none',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'flex-start',
          marginRight: '1.25rem',
          justifyContent: 'center',
          // fontSize: '0.75em',
          borderRadius: '9999px',
          // height: '0.2em',
          transform: `scale(${0.7})`,
        }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path
              style={{ fill: 'rgb(249, 24, 128)' }}
              d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
            ></path>
          </g>
        </svg>
        <span
          style={{
            fontSize: 20,
            marginLeft: '0.25rem',
            color: 'rgb(130, 154, 171)',
          }}
        >
          {favoriteCount}
        </span>
      </div>

      {/* Reply */}

      <div
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          alignItems: 'center',
          marginRight: '1.25rem',
          width: '1em',
          // height: baseFontSize,
          justifyContent: 'center',
          marginLeft: '-0.25rem',
          borderRadius: '9999px',
          transform: `scale(${0.7})`,
          transformOrigin: 'center',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{
            userSelect: 'none',
          }}
          aria-hidden="true"
        >
          <g>
            <path
              style={{ fill: 'rgb(0, 111, 214)' }}
              d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"
            ></path>
          </g>
        </svg>
        <span
          style={{
            fontSize: 20,
            marginLeft: '0.25rem',
            color: 'rgb(130, 154, 171)',
          }}
        >
          {tweet.conversation_count || ''}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          fontSize: 20,
          // fontSize: '0.7rem',
          // lineHeight: '1.25rem',
          color: 'rgb(130, 154, 171)',
        }}
      >
        <time style={{ fontSize: 14 }} dateTime={createdAt.toISOString()}>
          {format(createdAt, 'MMM d, y')}
        </time>
      </div>
    </div>
  );
};
