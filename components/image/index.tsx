import NextImage from 'next/image'
interface IProps {
  src: string
}
// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ src, ...rest }: IProps) => <NextImage src={src} {...rest} />

export default Image
