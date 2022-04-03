import React from 'react'
import Link from 'next/link'
interface IProps {
  href: string
  ariaLabel?: string
  className?: string
}

const CustomLink: React.FC<IProps> = ({ href, ariaLabel, children }) => {
  return (
    <Link href={href} aria-label={ariaLabel}>
      <a href={href}>{children}</a>
    </Link>
  )
}

export default CustomLink
