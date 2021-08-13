import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import qs from "qs"
import Layout from "../../components/Layout"
import IndividualCard from "../../components/IndividualCard"
import { API_URL } from "../../config/index"
import { BackButton } from "../../components/Buttons"

interface IndividCardProps {
  recipe: string
  creator: string
  company: string
  brewer: string
  hashtags: string
  rating: number
  slug: string
  type: string
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { recipe_contains: term },
        { creator_contains: term },
        { company_contains: term },
        { brewer_contains: term },
        { hashtags_contains: term },
      ],
    },
  })

  const res = await fetch(`${API_URL}/pourovers?${query}`)
  const recipes = await res.json()

  return {
    props: { recipes },
  }
}

export default function search({ recipes }: any) {
  const router = useRouter()

  return (
    <Layout>
      {recipes.length === 0 ? (
        <h1 className='text-center font-bold text-3xl'>
          No pour over recipes found for "{router.query.term}"
        </h1>
      ) : (
        <h1 className='text-center font-bold text-3xl'>
          Found Pour Over Recipes for "{router.query.term}"
        </h1>
      )}

      <a href='/pour-over'>
        <BackButton text='Back to All Pour Over Recipes' />
      </a>

      {recipes.map(
        ({
          recipe,
          creator,
          company,
          brewer,
          hashtags,
          rating,
          slug,
          type,
        }: IndividCardProps) => (
          <IndividualCard
            key={recipe}
            recipe={recipe}
            creator={creator}
            company={company}
            brewer={brewer}
            hashtags={hashtags}
            rating={rating}
            slug={slug}
            type={type}
          />
        )
      )}
    </Layout>
  )
}
