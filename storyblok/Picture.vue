<script setup lang="ts">
import type { PictureStoryblok } from '~/storyblok/types'

defineProps<{ blok: PictureStoryblok, isFirst: boolean }>()

</script>

<template>
  <ContentWrapper
    v-editable="blok"
    :class-name="blok.class"
  >
    <img
      :src="blok.image.filename"
      :alt="blok.image.alt"
      :width="blok.image.width"
      :height="blok.image.height"
      :loading="isFirst ? 'eager' : 'lazy'"
    />
    <p
      v-if="blok.note"
      class="mt-4 text-center text-gray-500 text-sm"
    >{{ blok.note }}</p>
  </ContentWrapper>
</template>

<style scoped>

</style>
