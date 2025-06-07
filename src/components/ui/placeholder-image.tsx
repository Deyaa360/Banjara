import React from 'react';

interface PlaceholderImageProps {
  text?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  text = 'Image Placeholder',
  width = '100%',
  height = '100%',
  bgColor = '#f0e0c0',
  textColor = '#993333',
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: textColor,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      {text}
    </div>
  );
};

export default PlaceholderImage;