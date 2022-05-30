import Icon from '@/components/icon'
export enum EKind {
  mail = 'mail',
  tel = 'tel',
  qq = 'qq',
  wx = 'wx',
}

interface IProps {
  kind: EKind
  href?: string
  target?: string
  onClick?: () => void
}

const SocialIcon = ({
  kind,
  href,
  target = '_blank',
  onClick,
}: IProps) => {
  const className = 'text-sm text-gray-500 transition hover:text-gray-600'
  const svgClassName = `fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 text-xl`
  const content = (
    <>
      <span className="sr-only">{kind}</span>
      {(function () {
        switch (kind) {
          case 'mail':
            return <Icon code="&#xe600;" className={svgClassName} />
          case 'tel':
            return <Icon code="&#xe678;" className={svgClassName} />
          case 'qq':
            return <Icon code="&#xe882;" className={svgClassName} />
          case 'wx':
            return <Icon code="&#xe605;" className={svgClassName} />
        }
      })()}
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
