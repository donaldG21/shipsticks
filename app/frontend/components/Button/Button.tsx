import React, { FC } from 'react'

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="h-11 rounded bg-[#5fd063] px-6 py-3 font-bold text-white shadow-button-inset outline-none hover:bg-[#4fab55] focus:outline-none"
      type="button"
      onClick={onClick}>
        {text}
    </button>
  )
}
