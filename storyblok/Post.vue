<script setup lang="ts">

import type { PostStoryblok } from '~/storyblok/types'

const { setMetaFromPage } = useStoryblokHelpers()
const props = defineProps<{ blok: PostStoryblok }>()

setMetaFromPage(props.blok)

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <article
      v-editable="blok"
      class="relative content-grid gap-y-24 mb-24 [&>:first-child:not(.content-full-width)]:mt-32"
    >
      <StoryblokComponent
        v-for="(bodyBlok, i) in blok.content"
        :key="bodyBlok._uid"
        :blok="bodyBlok"
        :story="blok"
        :is-first="i === 0"
      />
    </article>
    <AppFooter class="mt-auto"/>
  </div>
</template>

<style scoped>

</style>
