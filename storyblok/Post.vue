<script setup lang="ts">

import dayjs from 'dayjs'
import type { PostStoryblok } from '~/storyblok/types'

const { setMetaFromPage } = useStoryblokHelpers()
const props = defineProps<{ blok: PostStoryblok }>()

setMetaFromPage(props.blok)

const header = computed(() => {
  return (props.blok.title || '')
    .replace(/\*\*(.*)\*\*/g, '<span class="text-red-600">$1</span>')
    .replace(/(?:\r\n|\r|\n)/g, '<br>')
})

const date = computed(() => {
  return dayjs(props.blok.created_at).format('MMMM YYYY')
})

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <article
      v-editable="blok"
      class="relative content-grid gap-y-16 mb-16 [&>:first-child:not(.content-full-width)]:mt-16"
    >
      <div
        class="pt-16 content-narrow"
      >
        <p class="text-gray-500 text-xs uppercase tracking-wider">{{ date }}</p>
        <h1
          class="mt-3 text-3xl sm:text-4xl font-bold text-gray-100 leading-tight"
          v-html="header"
        />
      </div>
      <StoryblokComponent
        v-for="bodyBlok in blok.content"
        :key="bodyBlok._uid"
        :blok="bodyBlok"
      />
    </article>
    <AppFooter class="mt-auto"/>
  </div>
</template>

<style scoped>

</style>
