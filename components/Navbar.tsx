import { useContext } from "react"
import Link from "next/link"
import AuthContext from "../context/AuthContext"

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  return (
    <header className='bg-gray-800'>
      <nav className='text-white container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center justify-between'>
        <Link href='/'>
          <a>Brew Methods</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        {user ? (
          <>
            <Link href='/account/dashboard'>
              <a>{`${user.name}'s Page`}</a>
            </Link>
            <button
              onClick={() => logout()}
              className='bg-red-600 text-white font-semibold rounded w-32 h-8'
            >
              Logout
            </button>
            )
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
