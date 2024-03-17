    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #576574',
        borderRadius: '8px',
        padding: '10px',
        maxWidth: '35%',
        backgroundColor: '#2f3640',
        color: '#f5f6fa',
        height: '90%',
        margin: 'auto',
      }}
    >
      {/* Tweet Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
        <img
          src={tweet.user.profile_image_url_https}
          alt={`${tweet.user.name}'s profile`}
          style={{
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            marginRight: '10px',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '20' }}>
          <div style={{ display: 'flex', fontWeight: 'bold', fontSize: '20' }}>
            {tweet.user.name} {tweet.user.verified && <span style={{ color: '#00b894' }}>✔️</span>}{' '}
          </div>
          <div style={{ display: 'flex', color: '#dcdde1' }}>@{tweet.user.screen_name}</div>{' '}
        </div>
      </div>

      {/* Tweet Text */}
      <div
        style={{
          display: 'flex',
          marginBottom: '0px',
          fontSize: '24',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          height: '30%',
        }}
      >
        <p>{tweet.text}</p>
      </div>

      {/* Tweet images */}
      {tweet.photos && tweet.photos.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          {tweet.photos.map((photo, index) => (
            <img
              key={index}
              src={photo.url}
              alt={`Tweet image ${index + 1}`}
              style={{ maxWidth: '100%', marginBottom: '10px' }}
            />
          ))}
        </div>
      )}

      {/* Quoted tweet, if it exists */}
      {quotedTweet && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #444',
            borderRadius: '8px',
            padding: '10px',
            marginTop: '20px',
            backgroundColor: '#353b48',
            color: '#f5f6fa',
          }}
        >
          {/* Quoted Tweet User and Text */}
          <div
            style={{
              marginBottom: '10px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: '20',
            }}
          >
            <img
              src={quotedTweet.user.profile_image_url_https}
              alt={`${quotedTweet.user.name}'s profile`}
              style={{
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                marginRight: '10px',
              }}
            />
            <strong>{quotedTweet.user.name}</strong> @{quotedTweet.user.screen_name}
            <span style={{ marginLeft: 'auto', color: '#dcdde1', fontSize: '0.8em' }}>
              {formatDateToYYYYMMDDHHMM(quotedTweet.created_at)}
            </span>
          </div>
          <div
            style={{
              fontSize: '20',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              height: '30%',
            }}
          >
            {quotedTweet.text}
          </div>
        </div>
      )}

      {/* Tweet Footer */}
      {tweet.entities.urls.length > 0 && (
        <div style={{ display: 'flex' }}>
          <a
            href={tweet.entities.urls[0].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00a8ff', textDecoration: 'none' }}
          >
            {tweet.entities.urls[0].url}
          </a>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#dcdde1',
          fontSize: '18',
        }}
      >
        {' '}
        {/* Adjusted text color for footer */}
        <span style={{ display: 'flex' }}>{formatDateToYYYYMMDDHHMM(tweet.created_at)}</span>
        <span style={{ display: 'flex' }}>❤️ {tweet.favorite_count}</span>
        <span style={{ display: 'flex' }}> 💬 {tweet.conversation_count}</span>
      </div>
    </div>