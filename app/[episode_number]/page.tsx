// app/[episode_number]/page.tsx

import { GetServerSideProps } from 'next';
import { useParams } from 'next/navigation';
import { getDynamicMetadata } from '../components/pageMetadata';
import { FrameMetadataType } from '@coinbase/onchainkit';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const episodeNumber = params?.episode_number;
  // Ensure episodeNumber is a string
  const episodeNumStr = typeof episodeNumber === 'string' ? episodeNumber : '700';

  return {
    props: {
      metadata: getDynamicMetadata(episodeNumStr),
    },
  };
};

// This is the normal Page
export default function Page({ metadata }: { metadata: FrameMetadataType }) {
  return (
    <div style={{ color: 'white', backgroundColor: 'black' }}>
      <h1>TLDL Frames</h1>
    </div>
  );
}
