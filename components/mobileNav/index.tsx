import { useState } from 'react'
import Link from '../link'
import headerNavLinks from '@/data/headerNavLinks'
import Icon from '@/components/icon'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-8 h-8 ml-1 mr-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        {navShow ? (
          <Icon className="text-gray-900 dark:text-gray-100" code="&#xe685;" />
        ) : (
          <Icon className="text-gray-900 dark:text-gray-100" code="&#xe7f4;" />
        )}
      </button>
      <div
        className={`fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed h-full mt-8">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link href={link.href}>
                <a
                  onClick={onToggleNav}
                  className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </a>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
