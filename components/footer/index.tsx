import { useState, useEffect } from 'react'
import Link from '../link'
import SocialIcon, { EKind } from '@/components/social-icons'
import { Popover } from 'antd'
import { get } from '@/lib/api'
import { IRespones, IUser } from '@/interface/user'

export default function Footer() {
  const [user, setUser] = useState<IUser | {}>({})

  useEffect(function () {
    ;(async function () {
      const { data }: IRespones = await get('/user')
      if (data.isSuccess) {
        setUser(data.data)
      }
    })()
  }, [])

  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <Popover
            placement="top"
            content={<img src={user?.wx} />}
            trigger="click"
          >
            <SocialIcon kind={EKind.wx} />
          </Popover>
          <Popover placement="top" content={user?.tel} trigger="click">
            <SocialIcon kind={EKind.tel} />
          </Popover>
          <Popover
            placement="top"
            content={<img src={user?.qq} />}
            trigger="click"
          >
            <SocialIcon kind={EKind.qq} />
          </Popover>
          <Popover placement="top" content={user?.email} trigger="click">
            <SocialIcon kind={EKind.mail} />
          </Popover>
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>lx</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">person web</Link>
        </div>
      </div>
    </footer>
  )
}
