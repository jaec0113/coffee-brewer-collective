import Link from "next/link"

export default function Navbar() {
  return (
    <div>
      <nav>
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
    </div>
  )
}
