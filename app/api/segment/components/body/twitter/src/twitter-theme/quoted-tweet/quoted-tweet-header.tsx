import { AvatarImg } from '../avatar-img';
import type { EnrichedQuotedTweet } from '../../utils.js';
import { VerifiedBadge } from '../verified-badge';

type Props = { tweet: EnrichedQuotedTweet };

export const QuotedTweetHeader = ({ tweet }: Props) => {
  const { user } = tweet;

  return (
    <div
      style={{
        display: 'flex',
        padding: '0.75rem 0.75rem 0 0.75rem',
        lineHeight: '1.25rem',
        fontSize: '0.9375rem',
        whiteSpace: 'nowrap',
        overflowWrap: 'break-word',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'relative',
          height: '20px',
          width: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            position: 'absolute',
            overflow: 'hidden',
            // borderRadius: '9999px',
            borderRadius: '4px',
          }}
        >
          <AvatarImg src={user.profile_image_url_https} alt={user.name} width={20} height={20} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          margin: '0 0.5rem',
        }}
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
        {/* TODO */}
        {/* <VerifiedBadge user={user} /> */}
        <div
          style={{
            display: 'flex',
            color: 'rgb(83, 100, 113)',
            textDecoration: 'none',
            textOverflow: 'ellipsis',
            marginLeft: '0.125rem',
          }}
        >
          <span title={`@${user.screen_name}`}>@{user.screen_name}</span>
        </div>
      </div>
    </div>
  );
};
