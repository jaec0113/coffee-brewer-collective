import Image from "next/image"
import Link from "next/link"

export default function RecipeCard() {
  return (
    // whole card
    <div className='flex flex-col px-10 py-6 rounded-lg shadow-md mt-6'>
      {/* card heading */}
      <div className='flex w-full'>
        <Image src='/test.png' height={250} width={250} />
        <div className='flex flex-col text-right justify-around w-3/4'>
          <h1 className='text-2xl'>Recipe Name Prop</h1>
          <p>Creator Prop</p>
          <p>Company Prop</p>
        </div>
      </div>
      {/* recipe base information */}
      <div className='my-5'>
        <p className='my-1'>Coffee Amount Prop</p>
        <p className='my-1'>Water Amount Prop</p>
        <p className='my-1'>Ratio Prop</p>
        <p className='my-1'>Water Temperature Prop</p>
        <p className='my-1'>Grind Size Prop</p>
        <p className='my-1'>Brewer Prop</p>
      </div>
      {/* recipe */}
      <div className='mb-5'>
        <h2>Brew Recipe</h2>
        <p>Recipe Prop</p>
      </div>
      {/* other info */}
      <div>
        <h3 className='my-2'>Notes</h3>
        <p>Notes Prop</p>
        <h3 className='my-2'>Links</h3>
        <p>Links Prop</p>
        <h3 className='my-2'>Rating</h3>
        <p>Rating Prop</p>
        <p className='text-blue-600'>Hashtag Prop</p>
      </div>
      {/* comments section */}
      <div>
        <h3>Comments</h3>
      </div>
    </div>
  )
}
