import Image from '@/components/image'

export default function About({}) {
  return (
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
              src="/avatar.png"
              className={`rounded-full`}
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              LX
            </h3>
            <div className="text-gray-500 dark:text-gray-400">UI设计师</div>
            <div className="text-gray-500 dark:text-gray-400">菜来湿乐公司</div>
            <div className="flex pt-6 space-x-3"></div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              滚滚长江东逝水 2，浪花淘尽英雄 3。是非成败转头空 4。青山依旧在
              5，几度夕阳红 6。 白发渔樵江渚上 7，惯看秋月春风 8。一壶浊酒喜相逢
              9。古今多少事 10，都付笑谈中 11。
            </p>
            <p>
              滚滚长江东逝水 2，浪花淘尽英雄 3。是非成败转头空 4。青山依旧在
              5，几度夕阳红 6。 白发渔樵江渚上 7，惯看秋月春风 8。一壶浊酒喜相逢
              9。古今多少事 10，都付笑谈中 11。
            </p>
            <p>
              滚滚长江东逝水 2，浪花淘尽英雄 3。是非成败转头空 4。青山依旧在
              5，几度夕阳红 6。 白发渔樵江渚上 7，惯看秋月春风 8。一壶浊酒喜相逢
              9。古今多少事 10，都付笑谈中 11。
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
