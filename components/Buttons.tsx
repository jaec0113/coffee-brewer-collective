import React from "react"

interface EmailButtonProps {
  text: string
}

export const EmailButton: React.FC<EmailButtonProps> = ({ text }) => {
  return (
    <button className='bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded w-60 my-5'>
      {text}
    </button>
  )
}
