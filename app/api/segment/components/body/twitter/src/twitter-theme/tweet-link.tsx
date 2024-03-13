import type { ReactNode } from 'react';
import s from './tweet-link.module.css';

type Props = {
  children: ReactNode;
  href: string;
};

export const TweetLink = ({ href, children }: Props) => (
  <a
    href={href}
    style={{
      // display: 'flex',
      fontWeight: 'inherit',
      color: 'rgb(0, 111, 214)',
      textDecoration: 'none',
      cursor: 'pointer',
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);
