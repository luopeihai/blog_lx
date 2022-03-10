import { NextPage } from 'next'
import TagItem from '@/components/tag'
import Link from '@/components/link'
import { get } from '@/lib/api'
import { IRespones, IData } from '@/interface/tag'

interface ITagProps extends IData {}

const Tag: NextPage<ITagProps> = ({ items = [] }) => {
  return (
    <>
      {/* <PageSEO
        title={`Tags - ${siteMetadata.author}`}
        description="Things I blog about"
      /> */}
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
            标签
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {/* {'No tags found.'} */}
          <div className="flex flex-wrap max-w-lg">
            {items.map((item, index) => (
              <div className="mt-2 mb-2 mr-5" key={index}>
                <TagItem text={item.title} />
                <Link
                  href={`/tags/next`}
                  className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                >
                  ({item.work_total})
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

Tag.getInitialProps = async (ctx) => {
  try {
    const { data }: IRespones = await get('/tag')
    console.log('data', data)
    return data.isSuccess ? data.data : { items: [] }
  } catch (error) {
    console.log(error)
  }
  return { items: [] }
}

export default Tag
