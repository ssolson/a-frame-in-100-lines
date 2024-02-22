// app/[episode_number]/page.tsx

import { getDynamicMetadata } from '../components/pageMetadata';
import type { Metadata } from 'next';

// This is the normal Page
export default function Page({ params }: { params: { episode_number: string } }) {
  const metadata: Metadata = getDynamicMetadata(params.episode_number);
  console.log(metadata);

  return (
    <div style={{ color: 'white', backgroundColor: 'black' }}>
      <h1>TLDL Frames</h1>

      <meta property="og:title" content={metadata?.openGraph?.title as string} />
      <meta property="og:description" content={metadata?.openGraph?.description as string} />
      <meta property="og:image" content={metadata?.openGraph?.images as string} />

      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content={metadata?.other?.image as string} />
      <meta property="fc:frame:input" content={metadata?.other?.input as string} />
      {/* <meta property="fc:frame:button" content={metadata?.other?.buttons[0] as string} /> */}
      {/* <meta property="fc:frame:buttons" content={metadata?.other?.buttons as string} /> */}
      <meta property="fc:frame:postUrl" content={metadata?.other?.postUrl as string} />
    </div>
  );
}
