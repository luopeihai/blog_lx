import { NextPage } from 'next'
import { PageSEO } from '@/components/seo'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/card'
import { get } from '@/lib/api'
import { IRespones, IData } from '@/interface/work'

interface IHomeProps extends IData {}

const Home: NextPage<IHomeProps> = ({ items = [] }) => {
  return (
    <>
      <PageSEO title="首页" description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 ">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            作品集
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            知否,知否,应是绿肥红瘦
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {items.map((item) => (
              <Card key={item.uid} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const { data }: IRespones = await get('/work')

    return data.isSuccess ? data.data : { items: [] }
  } catch (error) {
    console.log(error)
  }
  return { items: [] }
}

export default Home
