<script setup lang="ts">

import type { SimpletextStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: SimpletextStoryblok }>()

const header = computed(() => {
  return (props.blok.header || '')
    .replace(/\*\*(.*)\*\*/g, '<b class="text-red-600">$1</b>')
    .replace(/(?:\r\n|\r|\n)/g, '<br>')
})
</script>

<template>
  <div v-editable="blok">
    <div class="max-w-prose">
      <h1
        class="text-3xl sm:text-4xl font-bold text-gray-100"
        v-html="header"
      />
      <Markdown
        :markdown="blok.bodytext"
        provider="storyblok"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
