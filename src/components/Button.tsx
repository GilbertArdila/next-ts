import React, { MouseEventHandler } from 'react'
import type {HTMLAttributes} from 'react'


interface TextProps {
    text: string;
}

interface Props2 extends HTMLAttributes<HTMLButtonElement>,TextProps{
}

export const Button = ({text,...buttonProps}:Props2):JSX.Element => {
  return (
    <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6"
    {...buttonProps}
    >{text}</button>
    
  )
}
