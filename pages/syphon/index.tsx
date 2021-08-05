import Head from "next/head"
import Layout from "../../components/Layout"
import IndividualCard from "../../components/IndividualCard"

export default function index() {
  return (
    <Layout>
      <Head>
        <title>Syphon Brew Methods | Coffee Brewing Collective</title>
        <meta
          name='keywords'
          content='coffee, brewing, syphon, siphon, vacuum coffee'
        />
        <meta
          name='descriptions'
          content='Find a wide variety of syphon coffee brewing methods created by coffee professionals from all over the world.'
        />
      </Head>
      <h1 className='text-center font-bold text-3xl'>
        Syphon Brew Methods Main Page
      </h1>
      <IndividualCard />
    </Layout>
  )
}
