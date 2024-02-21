<script setup lang="ts">
import type { PageStoryblok } from '~/storyblok/types'

const { setMetaFromPage } = useStoryblokHelpers()
const props = defineProps<{ blok: PageStoryblok }>()

setMetaFromPage(props.blok)

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <main
      v-editable="blok"
      class="relative content-grid gap-y-16 mb-16 [&>:first-child:not(.content-full-width)]:mt-16"
    >
      <StoryblokComponent
        v-for="bodyBlok in blok.body"
        :key="bodyBlok._uid"
        :blok="bodyBlok"
      />
    </main>
    <AppFooter class="mt-auto"/>
  </div>
</template>
