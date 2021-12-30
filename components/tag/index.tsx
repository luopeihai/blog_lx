import Link from 'next/link'

interface IProps {
  text: string
}

const Tag = ({ text }: IProps) => {
  return (
    <Link href={`/tags/${text}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text}
      </a>
    </Link>
  )
}

export default Tag
