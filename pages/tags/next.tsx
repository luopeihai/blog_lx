import { TagSEO } from '@/components/seo'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/components/layouts/ListLayout'

export default function Tag({}) {
  return (
    <>
      {/* <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      /> */}
      <ListLayout />
    </>
  )
}
