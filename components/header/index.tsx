import React from 'react'
import Link from '../link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '../logo'
import ThemeSwitch from '../themeSwitch'
import MobileNav from '../mobileNav'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="#" aria-label="Tailwind CSS Blog">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100">
                {link.title}
              </a>
            </Link>
          ))}
        </div>
        <MobileNav />
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
