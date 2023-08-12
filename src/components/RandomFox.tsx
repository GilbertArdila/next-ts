import React from 'react';

interface Props {
    image: string;
    alt: string;
}

export const RandomFox = ({image,alt}: Props):JSX.Element => {
 

  return (
    <img 
    className='w-1/2 h-1/2 rounded-lg shadow-lg'
    src={image} alt={alt} />
  )
}
