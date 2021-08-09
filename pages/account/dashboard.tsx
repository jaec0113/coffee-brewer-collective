import { useContext } from "react"
import Head from "next/head"
import AuthContext from "../../context/AuthContext"
import Layout from "../../components/Layout"

export default function dashboard() {
  const { user, logout } = useContext(AuthContext)

  return (
    <Layout>
      <Head>
        <title>My Page | Coffee Brewing Collective</title>
      </Head>
      <div>
        <h1>{`${user.name}'s Page`}</h1>
      </div>
    </Layout>
  )
}
