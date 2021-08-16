import { useContext } from "react"
import Link from "next/link"
import AuthContext from "../context/AuthContext"

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <header className='bg-gray-800'>
      <nav className='text-white container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center justify-between'>
        <div className='relative group'>
          <a>Brew Methods</a>
          <div className='absolute bg-gray-800 text-white py-4 pl-2 pr-10 z-10 hidden group-hover:block'>
            <Link href='/'>
              <a className='my-2 w-max group-hover:block hover:text-yellow-300'>
                Home Page
              </a>
            </Link>
            <Link href='/pour-over'>
              <a className='my-2 w-max group-hover:block hover:text-yellow-300'>
                Pour Over
              </a>
            </Link>
            <Link href='/aeropress'>
              <a className='my-2 w-max group-hover:block hover:text-yellow-300'>
                Aeropress
              </a>
            </Link>
            <Link href='/french-press'>
              <a className='my-2 w-max group-hover:block hover:text-yellow-300'>
                French Press
              </a>
            </Link>
            <Link href='/syphon'>
              <a className='my-2 w-max group-hover:block hover:text-yellow-300'>
                Syphon
              </a>
            </Link>
          </div>
        </div>
        <Link href='/about'>
          <a>About</a>
        </Link>
        {user ? (
          <>
            <Link href='/account/dashboard'>
              <a>{`${user.username}'s Page`}</a>
            </Link>
            <button
              onClick={() => logout()}
              className='bg-red-600 text-white font-semibold rounded w-32 h-8'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href='/account/login'>
              <a>Login</a>
            </Link>

            <Link href='/account/register'>
              <a>Register</a>
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
