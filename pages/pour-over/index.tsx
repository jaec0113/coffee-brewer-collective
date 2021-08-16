import { GetServerSideProps } from "next"
import Head from "next/head"
import Layout from "../../components/Layout"
import IndividualCard from "../../components/IndividualCard"
import Search from "../../components/search"
import Pagination from "../../components/Pagination"
import { API_URL, PER_PAGE } from "../../config/index"

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
  query: { page = 1 },
}) => {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  const totalRes = await fetch(`${API_URL}/pourovers/count`)
  const total = await totalRes.json()

  const pouroverRes = await fetch(
    `${API_URL}/pourovers?_limit=${PER_PAGE}&_start=${start}`
  )
  const recipes = await pouroverRes.json()

  return {
    props: { recipes, page: +page, total },
  }
}

export default function index({ recipes, page, total }: any) {
  return (
    <Layout>
      <Head>
        <title>Pour Over Brew Methods | Coffee Brewing Collective</title>
        <meta
          name='keywords'
          content='coffee, brewing, pour over, hand drip, filter, v60, kalita, melita, origami, april, december'
        />
        <meta
          name='descriptions'
          content='Find a wide variety of coffee pour over brewing methods created by coffee professionals from all over the world.'
        />
      </Head>
      <h1 className='text-center font-bold text-3xl'>
        Pour Over Brew Methods Main Page
      </h1>
      <Search type='pour-over' />
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
      <Pagination page={page} total={total} type='pour-over' />
    </Layout>
  )
}
