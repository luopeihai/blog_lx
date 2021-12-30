import Link from '../link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon, { EKind } from '@/components/social-icons'
import { Popover } from 'antd'

export default function Footer() {
  const content = <div>啦啦啦</div>
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <Popover placement="top" content={content} trigger="click">
            <SocialIcon kind={EKind.wx} />
          </Popover>
          <SocialIcon kind={EKind.tel} href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind={EKind.qq} href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind={EKind.mail} href={`mailto:${siteMetadata.email}`} />
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
