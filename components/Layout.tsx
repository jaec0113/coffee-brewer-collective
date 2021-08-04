import Head from "next/head"
import Navbar from "./Navbar"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>Coffee Brewing Collective</title>
        <meta
          name='keywords'
          content='coffee, brewing, pour over, filter, hand drip, aeropress, french press, siphon, syphon, v60, kalita, melita, origami, april, december'
        />
        <meta
          name='descriptions'
          content='Popular coffee brewing recipes from coffee professionals all over the world'
        />
      </Head>
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}
