import Image from "next/image"
import Link from "next/link"

interface IndividCardProps {
  recipe: string
  creator: string
  company: string
  brewer: string
  hashtags: string
  rating: number
  slug: string
}

export default function IndividualCard({
  recipe,
  creator,
  company,
  brewer,
  hashtags,
  rating,
  slug,
}: IndividCardProps) {
  return (
    <div className='flex px-10 py-6 rounded-lg shadow-md mt-6'>
      <Image src='/test.png' height={150} width={150} />
      <div className='w-3/5 mx-5 flex flex-col'>
        <h3 className='font-semibold'>{creator}</h3>
        <h3>{recipe}</h3>
        <p>{company}</p>
        <p>{brewer}</p>
        <p>{hashtags}</p>
        <p>Rating: {rating}</p>
        <Link href={`/pour-over/${slug}`}>
          <a className='text-red-500'>See Recipe</a>
        </Link>
      </div>
    </div>
  )
}
