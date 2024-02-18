// app/[episode_number]/page.tsx

import { useParams } from 'next/navigation';
import { metadata } from '../components/pageMetadata';

// This is the Frame
export { metadata };

// This is the normal Page
export default function Page() {
  const { episode_number } = useParams();
  return (
    <div style={{ color: 'white', backgroundColor: 'black' }}>
      <h1>TLDL Frames</h1>
    </div>
  );
}
