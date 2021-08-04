import Head from "next/head"
import HomeCard from "../components/HomeCard"

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Coffee Brewer Collective</title>
        <meta
          name='description'
          content='A collection of popular coffee brewing recipes by coffee professionals from all over the world.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Coffee Brewing Collective</h1>
      <div>
        <HomeCard />
      </div>
    </div>
  )
}
