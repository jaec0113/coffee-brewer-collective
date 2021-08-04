import Link from "next/link"

export default function Navbar() {
  return (
    <header className='bg-gray-800'>
      <nav className='text-white container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center justify-between'>
        <Link href='/brewmethods'>
          <a>Brew Methods</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/login'>
          <a>Login</a>
        </Link>
        <Link href='/register'>
          <a>Register</a>
        </Link>
      </nav>
    </header>
  )
}