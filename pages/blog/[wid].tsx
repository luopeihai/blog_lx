import React, { useState, useEffect } from 'react'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { PageSEO } from '@/components/seo'
import styles from './index.module.scss'
import Image from 'next/image'

import Link from '@/components/link'
import { get } from '@/lib/api'
import { formatDate } from '@/util/formatDate'
import {
  IDetailRespones,
  IDetailData,
  IWorks,
  IGetStaticPropsParams,
} from '@/interface/work'
import { IRespones, IUser } from '@/interface/user'

interface IBlogProps extends IDetailData {}

const Blog: React.FC<IBlogProps> = (data) => {
  const { work, prevWork, nextWork } = data
  const [user, setUser] = useState<IUser>()

  useEffect(function () {
    ;(async function () {
      const { data }: IRespones = await get('/user')
      if (data.isSuccess) {
        setUser(data.data)
      }
    })()
  }, [])

  const description = (work?.tags || []).map((item) => item.title).join(' ')

  return (
    <>
      <PageSEO title={work?.title || '作品详情'} description={description} />
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <ScrollTopAndComment />
        <article>
          <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    {work?.create_time && (
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime="2018-08-15T00:00:00.000Z">
                          {formatDate('yyyy-MM-dd', work.create_time)}
                        </time>
                      </dd>
                    )}
                  </div>
                </dl>
                <div>
                  {work?.title && (
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                      {work.title}
                    </h1>
                  )}
                </div>
              </div>
            </header>
            <div
              className={`pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 ${styles.content}`}
            >
              {!!user?.avatar && (
                <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
                  <dt className="sr-only">Authors</dt>
                  <dd>
                    <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                      <li className="flex items-center space-x-2">
                        <Image
                          src={user.avatar}
                          width="38px"
                          height="38px"
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                          <dt className="sr-only">名字</dt>
                          <dd className="text-gray-900 dark:text-gray-100">
                            {user.nickname}
                          </dd>
                        </dl>
                      </li>
                    </ul>
                  </dd>
                </dl>
              )}

              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
                <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                  {work?.pics.split(',').map((item, index) => (
                    <Image
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                      key={index}
                      src={item}
                    />
                  ))}
                </div>
              </div>
              <footer>
                <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      标签
                    </h2>
                    <div className="flex flex-wrap">
                      {work?.tags &&
                        Array.isArray(work?.tags) &&
                        work.tags.map((item, index) => (
                          <Link
                            key={index}
                            className="mr-3 text-sm font-medium  text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            href={`/tags/next?tagName=${item.title}`}
                          >
                            {item.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prevWork && prevWork?.title && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          上一页
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/detail?id=${prevWork.uid}`}>
                            {prevWork.title}
                          </Link>
                        </div>
                      </div>
                    )}
                    {nextWork && nextWork?.title && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          下一页
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/detail?id=${nextWork.uid}`}>
                            {nextWork.title}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pt-4 xl:pt-8">
                  <Link
                    href="/"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    ← 回到作品集
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export async function getStaticProps({ params }: IGetStaticPropsParams) {
  const { data }: IDetailRespones = await get(`/work/${params.wid}`)
  const work = data.isSuccess ? data.data : {}
  return {
    props: {
      data: work,
    },
  }
}

export async function getStaticPaths() {
  const { data } = await get('/work/all/records')
  const works: IWorks[] = data.isSuccess ? data.data : []

  return {
    paths: works.map((item) => ({ params: { wid: item.uid } })),
    fallback: false,
  }
}

// export async function getServerSideProps(context) {
//   let res = {}
//   try {
//     const { wid } =context.query
//     const { data }: IDetailRespones = await get(`/work/${wid}`)
//     res = data.isSuccess ? data.data : {}
//   } catch (error) {
//     console.log(error)
//   }
//   return { props: { data: res } }
// }
export default Blog
