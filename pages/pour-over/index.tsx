import Head from "next/head"
import Layout from "../../components/Layout"
import IndividualCard from "../../components/IndividualCard"

export default function index() {
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
      <IndividualCard />
    </Layout>
  )
}
