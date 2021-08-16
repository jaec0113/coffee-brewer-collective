import React, { useState, useContext, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Layout from "../../components/Layout"
import AuthContext from "../../context/AuthContext"

export default function login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login, error } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => error && toast.error(error))

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    login({ email, password })
    router.push("/account/dashboard")
  }

  return (
    <Layout>
      <Head>
        <title>Login | Coffee Brewing Collective</title>
        <meta
          name='keywords'
          content='login, coffee brewing collective, coffee brewing'
        />
        <meta
          name='descriptions'
          content='Login to your Coffee Brewing Collective account to access your favorite recipes.'
        />
      </Head>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className='text-3xl ml-3 font-bold text-center'>
          <h1>Login</h1>
        </div>
        <div className='mt-8 max-w-md'>
          <div className='grid grid-cols-1 gap-6 mx-3'>
            <label htmlFor='email' className='text-gray-800'>
              Enter Email Address
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-100 focus:ring-0 focus:border-black'
              placeholder='coffeebrewingcollective@email.com'
              autoComplete='on'
            />
            <label htmlFor='password' className='text-gray-800'>
              Enter Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-100 focus:ring-0 focus:border-black'
              placeholder='my-password'
              autoComplete='on'
            />
          </div>
        </div>
        <input
          type='submit'
          value='Login'
          className='bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded w-60 my-5 ml-3'
        />
      </form>
      <p className='text-sm ml-3'>
        Don't Have an Account?
        <Link href='/account/register'>
          <a className='text-blue-600'> Create Account</a>
        </Link>
      </p>
    </Layout>
  )
}
