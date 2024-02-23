<script setup lang="ts">
import type { PageStoryblok } from '~/storyblok/types'

const { setMetaFromPage } = useStoryblokHelpers()
const props = defineProps<{ blok: PageStoryblok }>()

const marginTop = computed(() => {
  return {
    large: '[&>:first-child:not(.content-full-width)]:mt-32',
    _: '[&>:first-child:not(.content-full-width)]:mt-16'
  }[props.blok.topMargin || '_']
})

setMetaFromPage(props.blok)

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <main
      v-editable="blok"
      :class="['relative content-grid gap-y-24 mb-24', marginTop]"
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
