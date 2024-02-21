<script setup lang="ts">
import type { HomeStoryblok } from '~/storyblok/types'

const { setMetaFromPage } = useStoryblokHelpers()
const props = defineProps<{ blok: HomeStoryblok }>()

setMetaFromPage(props.blok)

</script>

<template>
  <main
    v-editable="blok"
  >
    <StoryblokComponent
      v-for="bodyBlok in blok.body"
      :key="bodyBlok._uid"
      :blok="bodyBlok"
    />
  </main>
</template>
