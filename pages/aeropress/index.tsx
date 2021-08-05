import Head from "next/head"
import Layout from "../../components/Layout"
import IndividualCard from "../../components/IndividualCard"
import RecipeCard from "../../components/RecipeCard"

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Aeropress Brew Methods | Coffee Brewing Collective</title>
        <meta name='keywords' content='coffee, brewing, aeropress' />
        <meta
          name='descriptions'
          content='Find a wide variety of Aeropress brewing methods created by coffee professionals from all over the world.'
        />
      </Head>
      <h1 className='text-center font-bold text-3xl'>
        AeroPress Brew Methods Main Page
      </h1>
      <IndividualCard />
      <RecipeCard />
    </Layout>
  )
}
