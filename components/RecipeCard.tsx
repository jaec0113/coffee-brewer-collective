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
          <h1 className='text-2xl'>{recipe.recipe}</h1>
          <p>{recipe.creator}</p>
          <p>{recipe.company}</p>
        </div>
      </div>
      <div className='my-5'>
        <p className='my-1'>
          Coffee: <span>{recipe.coffeeAmount}</span>
        </p>
        <p className='my-1'>
          Water: <span>{recipe.waterAmount}</span>
        </p>
        <p className='my-1'>
          Ratio: <span>{recipe.ratio}</span>
        </p>
        <p className='my-1'>
          Water Temperature: <span>{recipe.waterTemperature}</span>
        </p>
        <p className='my-1'>
          Grind Size: <span>{recipe.grindSize}</span>
        </p>
        <p className='my-1'>
          Brewer: <span>{recipe.brewer}</span>
        </p>
      </div>
      <div className='mb-5'>
        <h2>Brew Recipe</h2>
        <p>{recipe.brewMethod}</p>
      </div>
      <div>
        <h3 className='my-2'>Notes</h3>
        <p>{recipe.notes}</p>
        <h3 className='my-2'>Links</h3>
        <p>{recipe.links}</p>
        <h3 className='my-2'>Rating</h3>
        <p>{recipe.rating}</p>
        <p className='text-blue-600'>{recipe.hashtags}</p>
      </div>
      <div>
        <h3>Comments</h3>
      </div>
    </div>
  )
}
