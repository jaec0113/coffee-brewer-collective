import Head from "next/head"
import Layout from "../../components/Layout"
import IndividualCard from "../../components/IndividualCard"

export default function index() {
  return (
    <Layout>
      <Head>
        <title>French Press Brew Methods | Coffee Brewing Collective</title>
        <meta
          name='keywords'
          content='coffee, brewing, french press, steeped coffee, kokkekaffe, clever, clever dripper, hario switch'
        />
        <meta
          name='descriptions'
          content='Find a wide variety of French Press and other steeped coffee brewing methods created by coffee professionals from all over the world.'
        />
      </Head>
      <h1 className='text-center font-bold text-3xl'>
        French Press Brew Methods Home Page
      </h1>
      <IndividualCard />
    </Layout>
  )
}
