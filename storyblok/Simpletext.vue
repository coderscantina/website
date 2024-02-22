<script setup lang="ts">

import type { SimpletextStoryblok } from '~/storyblok/types'
import ContentWrapper from '~/components/ContentWrapper.vue'

defineProps<{ blok: SimpletextStoryblok }>()

</script>

<template>
  <ContentWrapper
    v-editable="blok"
    :class-name="blok.class"
  >
    <div class="max-w-prose">
      <Headline
        class="text-3xl sm:text-4xl font-bold text-gray-100"
        :headline="blok.header"
      />
      <Markdown
        :markdown="blok.bodytext"
        provider="storyblok"
      />
    </div>
  </ContentWrapper>
</template>

<style scoped>

</style>
