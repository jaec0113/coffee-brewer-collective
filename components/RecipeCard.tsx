import Image from "next/image"

interface PourOverTypes {
  recipe: string
  creator: string
  company: string
  brewer: string
  hashtags: string
  rating: number
  slug: string
  coffeeAmount: string
  waterAmount: string
  ratio: string
  waterTemperature: string
  grindSize: string
  brewRecipe: string
  notes: string
  links: string
}

export default function RecipeCard({ recipe }: any) {
  return (
    <div className='flex flex-col px-10 py-6 rounded-lg shadow-md mt-6'>
      <div className='flex w-full'>
        <Image src='/test.png' height={250} width={250} />
        <div className='flex flex-col text-right justify-around w-3/4'>
          <h1 className='text-2xl font-bold'>{recipe.recipe}</h1>
          <p className='font-semibold'>{recipe.creator}</p>
          <p className='font-semibold'>{recipe.company}</p>
        </div>
      </div>
      <div className='my-5'>
        <p className='my-1'>
          <span className='font-bold'>Coffee: </span>
          {recipe.coffeeAmount}
        </p>
        <p className='my-1'>
          <span className='font-bold'>Water: </span>
          {recipe.waterAmount}
        </p>
        <p className='my-1'>
          <span className='font-bold'>Ratio: </span>
          {recipe.ratio}
        </p>
        <p className='my-1'>
          <span className='font-bold'>Water Temperature: </span>
          {recipe.waterTemperature}
        </p>
        <p className='my-1'>
          <span className='font-bold'>Grind Size: </span>
          {recipe.grindSize}
        </p>
        <p className='my-1'>
          <span className='font-bold'>Brewer: </span>
          {recipe.brewer}
        </p>
      </div>
      <div className='mb-5'>
        <h2 className='font-bold'>Brew Recipe</h2>
        {recipe.brewMethod}
      </div>
      <div>
        <h3 className='my-2 font-bold'>Notes</h3>
        <p>{recipe.notes}</p>
        <h3 className='my-2 font-bold'>Links</h3>
        <p>{recipe.links}</p>
        <h3 className='my-2 font-bold'>Rating</h3>
        <p>{recipe.rating}</p>
        <p className='text-blue-600'>{recipe.hashtags}</p>
      </div>
      <div>
        <h3>Comments</h3>
      </div>
    </div>
  )
}
