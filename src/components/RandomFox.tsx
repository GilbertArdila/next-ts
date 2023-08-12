import React from 'react';

interface Props {
    image: string;
    alt: string;
}

export const RandomFox = ({image,alt}: Props):JSX.Element => {
 

  return (
    <img 
    className='w-full h-80 rounded-lg shadow-lg'
    src={image} alt={alt} />
  )
}
