import { GetServerSideProps } from "next"
import { useContext } from "react"
import Head from "next/head"
import AuthContext from "../../context/AuthContext"
import Layout from "../../components/Layout"
import { parseCookies } from "../../helpers"
import { API_URL } from "../../config"

export const getServerSideProps: GetServerSideProps = async ({ req }: any) => {
  const { token } = parseCookies(req)

  const aeropressRes = await fetch(`${API_URL}/aeropresses/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const aeropressRecipes = await aeropressRes.json()

  const pouroverRes = await fetch(`${API_URL}/pourovers/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const pouroverRecipes = await pouroverRes.json()

  const frenchpressRes = await fetch(`${API_URL}/frenchpresses/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const frenchpressRecipes = await frenchpressRes.json()

  const syphonRes = await fetch(`${API_URL}/syphons/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const syphonRecipes = await syphonRes.json()

  return {
    props: {},
  }
}

export default function dashboard({
  aeropressRecipes,
  pouroverRecipes,
  frenchpressRecipes,
  syphonRecipes,
}: any) {
  const { user } = useContext(AuthContext)

  console.log(aeropressRecipes)
  console.log(pouroverRecipes)
  console.log(frenchpressRecipes)
  console.log(syphonRecipes)

  return (
    <Layout>
      <Head>
        <title>My Page | Coffee Brewing Collective</title>
      </Head>
      <div>
        <h1>My Dashboard</h1>
      </div>
    </Layout>
  )
}
