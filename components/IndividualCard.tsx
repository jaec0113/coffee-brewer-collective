import Image from "next/image"
import Link from "next/link"

export default function IndividualCard() {
  return (
    <div className='flex px-10 py-6 rounded-lg shadow-md mt-6'>
      <Image src='/test.png' height={150} width={150} />
      <div className='w-3/5 mx-5'>
        <h3 className='font-semibold'>Recipe Creator: Name Prop</h3>
        <p>Company Prop</p>
        <p>Brewer: Brewer Prop</p>
        <p>Hashtag Prop</p>
        <p>Rating Prop</p>
        <Link href='#'>
          <a className='text-red-500'>See Recipe</a>
        </Link>
      </div>
    </div>
  )
}
