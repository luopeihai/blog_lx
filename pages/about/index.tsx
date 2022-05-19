import { NextPage } from 'next'
import Image from 'next/image'
import { get } from '@/lib/api'
import { PageSEO } from '@/components/seo'
import { IRespones, IUser } from '@/interface/user'
interface IProps {
  user?: IUser
}

const About: NextPage<IProps> = ({ user }) => {
  return (
    <>
      <PageSEO title="关于我" description={user?.introduce || '一名ui设计师'} />
      <main className="mb-auto">
        <div className="divide-y">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              关于
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8 space-x-2">
              <Image
                width={150}
                height={150}
                alt="avatar"
                src={user?.avatar || ''}
                className={`rounded-full`}
              />
              <h3 className="pt-4 pb-2 text-2xl font-bold dark:text-gray-100 leading-8 tracking-tight">
                {user?.nickname}
              </h3>
              {user?.sign && (
                <div className="text-gray-500 dark:text-gray-400">
                  {user.sign}
                </div>
              )}

              <div className="flex pt-6 space-x-3"></div>
            </div>
            <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
              {user?.introduce && (
                <div dangerouslySetInnerHTML={{ __html: user.introduce }} />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

About.getInitialProps = async (ctx) => {
  try {
    const { data }: IRespones = await get('/user')
    return data.isSuccess ? { user: data.data } : {}
  } catch (error) {
    console.log(error)
  }
  return {}
}

export default About
