export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const preview = route.query?._storyblok || process.env.NODE_ENV !== 'production'

  if (preview) {
    nuxtApp.hook('page:finish', () => {
      refreshNuxtData()
    })
  }

  return { provide: { preview } }
})
