import React from 'react'
// import classNames from 'classNames'

interface IProps {
  code: string
  className?: string
}
const Icon: React.FC<IProps> = ({ code, className }) => (
  <span className={`iconfont ${className}`}>{code}</span>
)

export default Icon
