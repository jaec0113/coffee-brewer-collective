import React, { useState } from "react"
import { useRouter } from "next/router"

interface SearchInterface {
  type: string
}

export default function Search({ type }: SearchInterface) {
  const [search, setSearch] = useState("")

  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/${type}/search?term=${search}`)
    setSearch("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`search ${type}`}
          className='mt-0 ml-4 block px-0.5 border-0 border-b-2 border-gray-100 focus:ring-0 focus:border-black'
        />
      </form>
    </div>
  )
}
