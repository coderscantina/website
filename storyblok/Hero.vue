<script setup lang="ts">
import type { HeroStoryblok } from '~/storyblok/types'
const props = defineProps<{ blok: HeroStoryblok }>()

const header = computed(() => {
  return (props.blok.header || '')
    .replace(/\*\*(.*)\*\*/g, '<b class="text-red-600">$1</b>')
    .replace(/(?:\r\n|\r|\n)/g, '<br>')
})

</script>
<template>
  <div
    v-editable="blok"
    class="content-full-width"
  >
    <img
      v-if="blok.image"
      :src="blok.image.filename"
      :alt="blok.image.alt"
      class="w-full h-96 object-cover object-center"
    />
    <div class="content-grid">
      <div class="max-w-prose">
        <h1
          class="text-3xl sm:text-4xl font-bold text-gray-100"
          v-html="header"
        />
        <p class="mt-6">{{ blok.bodytext }}</p>
      </div>
      <div class="space-x-4 mt-4">
        <StoryblokComponent
          v-for="bodyBlok in blok.buttons"
          :key="bodyBlok._uid"
          :blok="bodyBlok"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
