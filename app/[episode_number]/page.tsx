// app/[episode_number]/page.tsx

import { useParams } from 'next/navigation';
import { getDynamicMetadata } from '../components/pageMetadata';

export default function Page() {
  const params = useParams();
  // Ensure `episode_number` is treated as a string, even if useParams() returns a string array
  const episode_number = Array.isArray(params.episode_number)
    ? params.episode_number[0]
    : params.episode_number;

  if (!episode_number) {
    return <div>Episode number is required.</div>;
  }

  // This is the Frame
  const metadata = getDynamicMetadata(episode_number);

  // This is the normal Page
  return (
    <div style={{ color: 'white', backgroundColor: 'black' }}>
      <h1>TLDL Frames</h1>
    </div>
  );
}
