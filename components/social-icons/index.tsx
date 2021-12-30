import Mail from './mail.svg'
import tel from './telephone.svg'
import qq from './QQ.svg'
import wx from './WeiXin.svg'

const components = {
  mail: Mail,
  tel,
  qq,
  wx,
}

export enum EKind {
  mail = 'mail',
  tel = 'tel',
  qq = 'qq',
  wx = 'wx',
}

interface IProps {
  kind: EKind
  href?: string
  size?: number
  target?: string
  onClick?: () => void
}

const SocialIcon = ({
  kind,
  href,
  size = 6,
  target = '_blank',
  onClick,
}: IProps) => {
  const SocialSvg = components[kind]
  const className = 'text-sm text-gray-500 transition hover:text-gray-600'
  const content = (
    <>
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </>
  )
  return href ? (
    <a
      className={className}
      target={target}
      rel="noopener noreferrer"
      href={href}
    >
      {content}
    </a>
  ) : (
    <div onClick={onClick} className={className}>
      {content}
    </div>
  )
}

export default SocialIcon
