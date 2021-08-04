import Image from "next/image"
import Link from "next/link"

interface PropTypes {
  name: string
  image: string
  url: string
}

export default function Card({ name, image, url }: PropTypes) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
      <div className='text-center'>
        <div className='cursor-pointer'>
          <Link href={url} passHref>
            <Image src={image} height={100} width={100} layout='responsive' />
          </Link>
        </div>

        <p className='text-3xl text-gray-800'>{name}</p>
      </div>
    </div>
  )
}
