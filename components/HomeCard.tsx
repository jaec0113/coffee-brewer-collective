import Image from "next/image"

interface PropTypes {
  name: string
  image: string
}

export default function Card({ name, image }: PropTypes) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
      <div className='text-center'>
        <div>
          <Image src={image} height={100} width={100} layout='responsive' />
        </div>

        <p className='text-3xl text-gray-800'>{name}</p>
      </div>
    </div>
  )
}
