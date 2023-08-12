import React, { MouseEventHandler } from 'react'


interface Props {
    onClick: (() => void) | MouseEventHandler<HTMLButtonElement>;
    text: string;

}

export const Button = ({onClick,text}:Props):JSX.Element => {
  return (
    <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6"
    onClick={onClick}
    >{text}</button>
    
  )
}
