import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { ParsedUrlQuery } from "querystring"
import Layout from "../../components/Layout"
import RecipeCard from "../../components/RecipeCard"
import { StandardButton } from "../../components/Buttons"
import { API_URL } from "../../config/index"

interface IParams extends ParsedUrlQuery {
  slug: string
}

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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/frenchpresses/`)
  const recipes = await res.json()

  const paths = recipes.map((recipe: any) => ({
    params: { slug: recipe.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const res = await fetch(`${API_URL}/frenchpresses/?slug=${slug}`)
  const recipes = await res.json()

  return {
    props: {
      recipe: recipes[0],
    },
    revalidate: 1,
  }
}

export default function PourOverRecipe({ recipe }: PourOverTypes) {
  return (
    <Layout>
      <Link href='/french-press'>
        <a>
          <StandardButton text='See All French Press Recipes' />
        </a>
      </Link>
      <RecipeCard key={recipe} recipe={recipe} />
    </Layout>
  )
}
