import Link from '@/components/link'
import Router from 'next/router'

interface IPaginationProps {
  tagName?: string
  page: number
  total: number
  count: number
}

export default function Pagination({
  page,
  total,
  count,
  tagName = '',
}: IPaginationProps) {
  const totalPage = Math.ceil(total / count)
  const prevPage = page - 1 > 0
  const nextPage = page < totalPage

  function hrefPage(page: number) {
    const path = `/tags/next?page=${page}`
    Router.push(tagName ? `${path}&tagName=${tagName}` : path)
  }
  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        <button
          className="cursor-auto disabled:opacity-50"
          disabled={!prevPage}
          onClick={() => hrefPage(page - 1)}
        >
          上一页
        </button>
        <span>
          {page} 共 {totalPage}
        </span>
        <button
          className="cursor-auto disabled:opacity-50"
          disabled={!nextPage}
          onClick={() => hrefPage(page + 1)}
        >
          下一页
        </button>
      </nav>
    </div>
  )
}
