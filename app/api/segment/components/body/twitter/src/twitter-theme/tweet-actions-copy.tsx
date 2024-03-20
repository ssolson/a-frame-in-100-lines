import type { EnrichedTweet } from '../utils.js';
import s from './tweet-actions.module.css';

export const TweetActionsCopy = ({ tweet }: { tweet: EnrichedTweet }) => {
  return (
    <button
      type="button"
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
        marginRight: '1.25rem',
      }}
      aria-label="Copy link"
    >
      <div
        style={{
          width: '1em',
          height: '0.75em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '-0.25rem',
          borderRadius: '9999px',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          style={{
            height: '1.0em',
            userSelect: 'none',
          }}
          aria-hidden="true"
        >
          <g>
            <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
          </g>
        </svg>
      </div>
      <span
        style={{
          fontSize: '0.75em',
          fontWeight: '700',
          lineHeight: '1rem',
          marginLeft: '0.25rem',
          color: 'rgb(130, 154, 171)',
        }}
      >
        'Copy link'
      </span>
    </button>
  );
};
