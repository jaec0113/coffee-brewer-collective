import Image from "next/image"
import Link from "next/link"

interface IndividCardProps {
  recipe: string
  creator: string
  company: string
  brewer: string
  hashtags: string
  rating: number
}

export default function IndividualCard({
  recipe,
  creator,
  company,
  brewer,
  hashtags,
  rating,
}: IndividCardProps) {
  return (
    <div className='flex px-10 py-6 rounded-lg shadow-md mt-6'>
      <Image src='/test.png' height={150} width={150} />
      <div className='w-3/5 mx-5 flex flex-col'>
        <h3 className='font-semibold'>
          Recipe Creator: <span>{creator}</span>
        </h3>
        <h3>{recipe}</h3>
        <p>
          Company: <span>{company}</span>
        </p>
        <p>
          Brewer: <span>{brewer}</span>
        </p>
        <p>{hashtags}</p>
        <p>Rating</p>
        <p>{rating}</p>
        <Link href='#'>
          <a className='text-red-500'>See Recipe</a>
        </Link>
      </div>
    </div>
  )
}
