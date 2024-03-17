import type { ReactNode } from 'react';
import clsx from 'clsx';
import s from './tweet-container.module.css';
import './theme.css';

type Props = { className?: string; children: ReactNode };

export const TweetContainer = ({ className, children }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        minWidth: '250px',
        maxHeight: '450',
        // maxWidth: '550px',
        overflow: 'hidden',
        // /* font-family: var(--tweet-font-family); */
        fontWeight: '400',
        boxSizing: 'border-box',
        border: '1px solid rgb(207, 217, 222)',
        borderRadius: '12px',
        // margin: 'tweet-container-margin',
        backgroundColor: 'rgb(21, 32, 43)',
        // transitionProperty: background-color, box-shadow;
        // transitionDuration: 0.2s
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
