<script setup lang="ts">

import type { SimpletextStoryblok } from '~/storyblok/types'
import ContentWrapper from '~/components/ContentWrapper.vue'

const props = defineProps<{ blok: SimpletextStoryblok }>()

const alignClass = computed(() => {
  return {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[props.blok.align]
})

const bodyTextClass = computed(() => {
  return {
    left: '',
    center: 'mx-auto',
    right: 'ml-auto',
  }[props.blok.align]
})

</script>

<template>
  <ContentWrapper
    v-editable="blok"
    :class-name="blok.class"
    :class="alignClass"
  >
    <p
      v-if="blok.subheader"
      class="mb-3 text-xs text-red-600 font-semibold uppercase tracking-wider"
    >
      {{ blok.subheader }}
    </p>
    <Headline
      class="text-3xl sm:text-4xl font-bold text-gray-100 mb-3"
      :headline="blok.header"
    />
    <Markdown
      :markdown="blok.bodytext"
      provider="storyblok"
      :class="bodyTextClass"
    />
  </ContentWrapper>
</template>

<style scoped>

</style>
