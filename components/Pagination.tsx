import Link from "next/link"
import { PER_PAGE } from "../config"

interface PageInterface {
  page: number
  total: number
  type: string
}

export default function Pagination({ page, total, type }: PageInterface) {
  const lastPage = Math.ceil(total / PER_PAGE)

  return (
    <div>
      {page > 1 && (
        <Link href={`/${type}?page=${page - 1}`}>
          <a>Prev</a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/${type}?page=${page + 1}`}>
          <a>Next</a>
        </Link>
      )}
    </div>
  )
}
