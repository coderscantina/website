import type { UseSeoMetaInput } from '@unhead/schema'
import type { PageStoryblok } from '~/storyblok/types'

export default function useStoryblokHelpers() {
  function setMetaFromPage(content: Pick<PageStoryblok, 'metatags'>, fallbacks?: UseSeoMetaInput) {
    if (!content.metatags && !fallbacks) {
      return
    }
    const meta = content.metatags || {}
    const fb = fallbacks || {}

    // Prefer Storyblok settings over fallbacks
    const title = meta.title || fb.title
    const description = meta.description || fb.description
    const ogTitle = meta.og_title || fb.ogTitle
    const ogDescription = meta.og_description || fb.ogDescription
    const ogImage = meta.og_image || fb.ogImage
    const twitterTitle = meta.twitter_title || fb.twitterTitle
    const twitterDescription = meta.twitter_description || fb.twitterDescription
    const twitterImage = meta.twitter_image || fb.twitterImage

    const { title: omitted, ...fallbacksWithoutTitle } = fb
    useSeoMeta({
      title
    })
    useServerSeoMeta({
      ...fallbacksWithoutTitle as Record<string, string>,
      description,
      ogTitle: ogTitle || (typeof title === 'string' ? title : undefined),
      ogDescription: ogDescription || description,
      ogImage,
      twitterCard: 'summary',
      twitterTitle: twitterTitle || ogTitle || (typeof title === 'string' ? title : undefined),
      twitterDescription: twitterDescription || ogDescription || description,
      twitterImage: twitterImage || ogImage,
    })
  }

  return {
    setMetaFromPage
  }
}
