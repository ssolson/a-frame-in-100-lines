import { SegmentProps } from '../../../../../types';

interface BulletsProps {
  segmentData: SegmentProps;
}

const Bullets: React.FC<BulletsProps> = ({ segmentData }) => {
  const formatDate = (dateString: string) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    } as const;
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDateToYYYYMMDDHHMM = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 'auto',
        width: '62%',
        padding: '0 10px 0 0',
      }}
    >
      {segmentData.bullets.map((bullet, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            margin: '10px 0', // Adjusted margin for vertical spacing
            background: 'linear-gradient(to right, rgb(35,35,35), transparent)',
            borderRadius: '10px',
            padding: '10px',
            boxSizing: 'border-box',
            textAlign: 'justify',
          }}
        >
          {bullet}
        </div>
      ))}
    </div>
  );
};

export default Bullets;
