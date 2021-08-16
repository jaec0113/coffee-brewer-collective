import React, { useState, useContext, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Layout from "../../components/Layout"
import AuthContext from "../../context/AuthContext"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const { register, error } = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!")
      return
    }
    register({ username, email, password })
  }

  return (
    <Layout>
      <Head>
        <title>Register | Coffee Brewing Collective</title>
        <meta
          name='keywords'
          content='registration, coffee brewing collective, coffee brewing, coffee'
        />
        <meta
          name='description'
          content="Register an account at Coffee Brewing Collective. Save your favorite recipes, rate and comment on recipes you've tried."
        />
      </Head>
      <div className='text-3xl ml-3 font-bold text-center'>
        <h1>Register</h1>
      </div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className='mt-8 max-w-md'>
          <div className='grid grid-cols-1 gap-6 mx-3'>
            <label htmlFor='username' className='text-gray-800'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-100 focus:ring-0 focus:border-black'
              placeholder='myUserName'
              autoComplete='on'
            />

            <label htmlFor='email' className='text-gray-800'>
              Email Address
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
              placeholder='Enter Your Password'
            />

            <label htmlFor='passwordConfirm' className='text-gray-800'>
              Confirm Password
            </label>
            <input
              type='password'
              id='passwordConfirm'
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-100 focus:ring-0 focus:border-black'
              placeholder='Confirm Your Password'
            />
          </div>
        </div>
        <input
          type='submit'
          value='Register'
          className='bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded w-60 my-5 ml-3'
        />
      </form>
      <p className='text-sm ml-3'>
        Already Have an Account?
        <Link href='/account/login'>
          <a className='text-blue-600'> Go To Login</a>
        </Link>
      </p>
    </Layout>
  )
}
