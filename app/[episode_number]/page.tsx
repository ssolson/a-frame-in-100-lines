// app/[episode_number]/page.tsx

import { getDynamicMetadata } from '../components/pageMetadata';
import { useParams } from 'next/navigation';
import type { Metadata } from 'next';

// This is the normal Page
export default function Page() {
  const { episode_number } = useParams<{ episode_number: string }>();

  const metadata: Metadata = getDynamicMetadata(episode_number);

  return (
    <div style={{ color: 'white', backgroundColor: 'black' }}>
      <h1>TLDL Frames</h1>

      <meta property="og:title" content={metadata?.openGraph?.title as string} />
      <meta property="og:description" content={metadata?.openGraph?.description as string} />
      <meta property="og:image" content={metadata?.openGraph?.images as string} />

      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content={metadata?.other?.image as string} />
      <meta property="fc:frame:input" content={metadata?.other?.input as string} />
      <meta property="fc:frame:buttons" content={metadata?.other?.buttons as string} />
      <meta property="fc:frame:postUrl" content={metadata?.other?.postUrl as string} />
    </div>
  );
}
