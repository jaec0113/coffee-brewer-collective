import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { ReactNode } from "react"
import { NextPage } from "next"
import { AuthProvider } from "@/context/AuthContext"

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page)
  return (
    <AuthProvider>
      getLayout(
      <Component {...pageProps} />)
    </AuthProvider>
  )
}
export default MyApp
