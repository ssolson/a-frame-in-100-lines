// page.tsx;

import { metadata } from './pageMetadata';

// This is the Frame
export { metadata };

// This is the normal Page
export default function Page() {
  return (
    <div style={{ color: 'white', backgroundColor: 'black' }}>
      <h1>TLDL Frames</h1>
    </div>
  );
}
