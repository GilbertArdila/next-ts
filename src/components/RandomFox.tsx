import React from 'react';

//function to generate a random number
const random = ():number => Math.floor(Math.random() * 123) + 1;
const image:string = `https://randomfox.ca/images/${random()}.jpg`

export const RandomFox = ():JSX.Element => {
 

  return (
    <img 
    className='w-1/2 h-1/2 rounded-lg shadow-lg'
    src={image} alt="a fox image" />
  )
}
