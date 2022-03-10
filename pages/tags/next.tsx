import Link from '@/components/link'
import Tag from '@/components/tag'
import Pagination from '@/components/pagination'
import { useState } from 'react'

export default function ListLayout({}) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            nexport
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {/* {!filteredBlogPosts.length && 'No posts found.'} */}
          <li className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={'August 7, 2021'}>August 7, 2021</time>
                </dd>
              </dl>
              <div className="space-y-3 xl:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/blog/detail`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      nextjs
                    </Link>
                  </h3>
                  <div className="flex flex-wrap">
                    <Tag text="next" />
                    <Tag text="next" />
                    <Tag text="next" />
                  </div>
                </div>
                <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                  An overview of the new features released in v1 - code block
                  copy, multiple authors, frontmatter layout and more
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>

      <Pagination currentPage={3} totalPages={5} />
    </>
  )
}
