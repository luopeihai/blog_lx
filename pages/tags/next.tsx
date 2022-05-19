import { NextPage } from 'next'
import Link from '@/components/link'
import Tag from '@/components/tag'
import Pagination from '@/components/pagination'
import { PageSEO } from '@/components/seo'
import { useState, useEffect } from 'react'
import { get } from '@/lib/api'
import { formatDate } from '@/util/formatDate'
import { ISeachTagData, ISeachTagRespones } from '@/interface/tag'
import Router from 'next/router'
import { throttle } from 'lodash'

const SeachTag: NextPage<ISeachTagData> = ({
  items = [],
  tagName,
  total = 0,
  page = 0,
  count = 0,
}) => {
  const [searchName, setSearchName] = useState(tagName)
  useEffect(
    function () {
      setSearchName(tagName)
    },
    [tagName]
  )

  const throttleOnChange = throttle(function (e) {
    const tagName = e.target.value || ''
    setSearchName(tagName)
    Router.push(tagName ? `/tags/next?tagName=${tagName}` : `/tags/next`)
  }, 1000)

  const description = items.map((item) => item.title).join(' ')

  return (
    <>
      <PageSEO title={tagName} description={description} />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            搜索
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="请搜索标签"
              type="text"
              value={searchName}
              onChange={throttleOnChange}
              placeholder="请搜索标签"
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
        {items.length > 0 && (
          <ul>
            {items.map((item, index) => (
              <li key={index} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-on">{item.title}</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={'August 7, 2021'}>
                        {formatDate('yyyy-MM-dd', item.create_time)}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                        <Link href={`/blog/detail?id=${item.uid}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {(item.tags || []).map((row, rowKey) => (
                          <Tag text={row.title} key={rowKey} />
                        ))}
                      </div>
                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                      {item.description}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
      {items.length > 0 && (
        <Pagination page={page} total={total} count={count} tagName={tagName} />
      )}
    </>
  )
}

SeachTag.getInitialProps = async ({ query }) => {
  try {
    let { tagName, page = 1, count = 10 } = query
    page = typeof page !== 'number' ? parseInt(page as string) : page
    count = typeof count !== 'number' ? parseInt(count as string) : count
    const { data }: ISeachTagRespones = await get(`/tag/search`, {
      title: tagName,
      page,
      count,
    })

    if (data.isSuccess) {
      return {
        ...data.data,
        tagName,
        page,
        count,
      }
    }
    return {}
  } catch (error) {
    console.log(error)
  }
  return {}
}

export default SeachTag
