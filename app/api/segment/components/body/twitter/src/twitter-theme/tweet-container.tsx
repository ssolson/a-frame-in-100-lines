import type { ReactNode } from 'react';
import './theme.css';

type Props = { className?: string; children: ReactNode };

export const TweetContainer = ({ className, children }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '38%',
        minWidth: '250px',
        maxHeight: '450px',
        overflow: 'hidden',
        fontWeight: '400',
        boxSizing: 'border-box',
        border: '1px solid rgb(207, 217, 222)',
        borderRadius: '12px',
        backgroundColor: 'rgb(21, 32, 43)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          boxSizing: 'border-box',
          padding: '0.75rem 1rem',
        }}
      >
        {children}
      </div>
    </div>
  );
};
