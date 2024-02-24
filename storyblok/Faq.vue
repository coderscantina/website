<script setup lang="ts">
import type { FaqStoryblok } from '~/storyblok/types'

defineProps<{ blok: FaqStoryblok, isFirst: boolean }>()

</script>

<template>
  <div v-editable="blok">
    <h4 class="text-whit text-lg mb-4 font-bold">
      {{ blok.question }}
    </h4>
    <Markdown :markdown="blok.answer"/>
  </div>
</template>

<style scoped>

</style>
