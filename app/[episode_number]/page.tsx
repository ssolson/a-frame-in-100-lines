// app/[episode_number]/page.tsx

import { getDynamicMetadata } from '../components/pageMetadata';
import type { Metadata } from 'next';

// This is the normal Page
export default function Page({ params }: { params: { episode_number: string } }) {
  const metadata: Metadata = getDynamicMetadata(params.episode_number);
  console.log(metadata);

  // Function to render button meta tags dynamically
  const renderButtonMetaTags = () => {
    const buttonMetaTags = [];
    for (const key in metadata?.other) {
      if (key.startsWith('fc:frame:button:')) {
        // Assuming the value is directly usable as the content attribute
        buttonMetaTags.push(
          <meta key={key} property={key} content={metadata?.other[key] as string} />,
        );
      }
    }
    return buttonMetaTags;
  };

  return (
    <div style={{ color: 'white', backgroundColor: 'black' }}>
      <h1>TLDL Frames</h1>

      {/* Open Graph */}
      <meta property="og:title" content={metadata?.openGraph?.title as string} />
      <meta property="og:description" content={metadata?.openGraph?.description as string} />
      <meta property="og:image" content={metadata?.openGraph?.images as string} />

      {/*  Farcaster Frame*/}
      <meta property="fc:frame" content={metadata?.other?.['fc:frame'] as string} />
      <meta property="fc:frame:image" content={metadata?.other?.['fc:frame:image'] as string} />
      <meta
        property="fc:frame:input:text"
        content={metadata?.other?.['fc:frame:input:text'] as string}
      />
      <meta
        property="fc:frame:image:aspect_ratio"
        content={metadata?.other?.['fc:frame:image:aspect_ratio'] as string}
      />
      {renderButtonMetaTags()}
      <meta
        property="fc:frame:postUrl"
        content={metadata?.other?.['fc:frame:post_url'] as string}
      />
    </div>
  );
}
