<script setup lang="ts">
import hjs from 'highlight.js'
import type { SnippetStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: SnippetStoryblok }>()

const highlightedCode = computed(() => {
  const code = (props.blok?.code || '').trim()
  if (props.blok.language) {
    return hjs.highlight(props.blok.language, code)
  }
  return hjs.highlightAuto(code)
})

</script>

<template>
  <ContentWrapper
    v-editable="blok"
    :class-name="blok.class"
  >
    <div class="bg-gray-800 px-6 py-3 flex items-center">
      <div class="text-white font-semibold text-sm">
        {{ blok.title }}
      </div>
      <div class="ml-auto text-xs uppercase font-bold tracking-widest">
        {{ highlightedCode.language }}
      </div>
    </div>
    <div class="bg-black p-6">
      <pre v-html="highlightedCode.value"></pre>
    </div>
  </ContentWrapper>
</template>

<style scoped>

</style>
