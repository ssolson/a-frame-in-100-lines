type MediaImgProps = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  draggable?: boolean;
};

// eslint-disable-next-line jsx-a11y/alt-text -- The alt text is part of `...props`
export const MediaImg = (props: MediaImgProps) => <img {...props} />;
