import React from "react"

interface ButtonInterface {
  text: string
}

export const StandardButton: React.FC<ButtonInterface> = ({ text }) => {
  return (
    <button className='bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded w-60 my-5'>
      {text}
    </button>
  )
}

export const BackButton: React.FC<ButtonInterface> = ({ text }) => {
  return (
    <button className='bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-600 hover:border-transparent rounded w-60 my-5 text-sm ml-4'>
      {text}
    </button>
  )
}
