import { useState } from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import HomeCard from "../components/HomeCard"

export default function Home({}) {
  const [brewMethods, setBrewMethods] = useState([
    {
      key: 1,
      name: "Pour Over",
      image: "/kalita-tsubame.jpg",
      url: "/pour-over",
    },
    {
      key: 2,
      name: "Aeropress",
      image: "/aeropress.jpg",
      url: "/aeropress",
    },
    {
      key: 3,
      name: "French Press",
      image: "/french-press.jpg",
      url: "/french-press",
    },
    {
      key: 4,
      name: "Syphon",
      image: "/siphon.jpg",
      url: "/syphon",
    },
  ])

  return (
    <Layout>
      <Head>
        <title>Coffee Brewing Collective</title>
        <meta
          name='keywords'
          content='coffee, brewing, pour over, hand drip, filter, aeropress, french press, syphon, siphon, vacuum coffee, recipes, brew designs'
        />
        <meta
          name='description'
          content='A collection of popular coffee brewing recipes by coffee professionals from all over the world.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-center text-6xl text-gray-800'>
        Coffee Brewing Collective
      </h1>
      <div>
        {brewMethods.map(({ key, name, image, url }) => (
          <HomeCard key={key} name={name} image={image} url={url} />
        ))}
      </div>
    </Layout>
  )
}
