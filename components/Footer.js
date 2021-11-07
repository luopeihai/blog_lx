import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="wx" href={`mailto:${siteMetadata.wx}`} size="6" />
          <SocialIcon kind="tel" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="qq" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
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
