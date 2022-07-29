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
      <Link href="#" >
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          <div className="hidden text-2xl font-semibold sm:block">
            VatesBlog
          </div>
        </div>
      </Link>
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
