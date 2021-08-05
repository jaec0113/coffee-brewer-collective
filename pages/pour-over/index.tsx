import { GetStaticProps } from "next"
import Head from "next/head"
import Layout from "../../components/Layout"
import IndividualCard from "../../components/IndividualCard"

interface IndividCardProps {
  recipe: string
  creator: string
  company: string
  brewer: string
  hashtags: string
  rating: number
  slug: string
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:1337/pourovers`)
  const recipes = await res.json()

  return {
    props: { recipes },
    revalidate: 1,
  }
}

export default function index({ recipes }: any) {
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
      {recipes.map(
        ({
          recipe,
          creator,
          company,
          brewer,
          hashtags,
          rating,
          slug,
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
          />
        )
      )}
    </Layout>
  )
}
