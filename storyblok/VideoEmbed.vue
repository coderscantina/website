<script setup lang="ts">
import type { VideoEmbedStoryblok } from '~/storyblok/types'
import ContentWrapper from '~/components/ContentWrapper.vue'
import YoutubeIcon from '~/assets/icons/youtube.svg'

const embed = ref(null)
const preview = ref(true)
const props = defineProps<{ blok: VideoEmbedStoryblok }>()

const videoId = computed(() => {
  const url = props.blok.link.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/u)
  /* eslint-disable no-useless-escape */
  return (url[2] === undefined) ? url[0] : url[2].split(/[^0-9a-z_\-]/iu)[0]
})

const thumbnail = computed(() => {
  const quality = props.blok.class === 'narrow' ? 'mqdefault' : 'maxresdefault'
  return `https://img.youtube.com/vi/${videoId.value}/${quality}.jpg`
})

const iframeUrl = computed(() => {
  return `https://www.youtube-nocookie.com/embed/${videoId.value}?autoplay=1`
})

async function fetchEmbed() {
  const result = await $fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId.value}&format=json`)
  embed.value = result
}

watch(
  () => videoId.value,
  () => {
    preview.value = true
    fetchEmbed()
  },
  { flush: 'post' }
)

onMounted(fetchEmbed)

</script>

<template>
  <ContentWrapper
    v-editable="blok"
    :class-name="blok.class"
  >
    <div
      v-if="preview"
      class="relative overflow-clip cursor-pointer w-full group"
      @click="preview = false"
    >
      <h2
        class="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-black/0 font-semibold text-xl p-3"
      >{{ embed?.title }}</h2>
      <div class="inset-0 absolute flex items-center justify-center">
        <YoutubeIcon class="h-20"/>
      </div>
      <img
        :src="thumbnail"
        :alt="embed?.title"
        class="aspect-video w-full"
      />
      <div class="absolute inset-x-0 bottom-0 text-sm p-3">{{ $t('embedding.youtube') }}</div>
    </div>
    <iframe
      v-else
      :src="iframeUrl"
      :title="embed?.title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      class="aspect-video w-full"
      frameborder="0"
      allowfullscreen
    />
  </ContentWrapper>
</template>

<style scoped>

</style>
