<script setup lang="ts">

import type { SimpletextStoryblok } from '~/storyblok/types'
import ContentWrapper from '~/components/ContentWrapper.vue'

const props = defineProps<{ blok: SimpletextStoryblok }>()

const alignClass = computed(() => {
  return {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[props.blok.align ?? 'left']
})

const bodyTextClass = computed(() => {
  return {
    left: '',
    center: 'mx-auto',
    right: 'ml-auto',
  }[props.blok.align ?? 'left']
})

const colClass = computed(() => {
  return {
    '': '',
    '2-8': 'col-start-2 col-end-13 md:col-start-2 md:col-end-10 lg:col-start-2 lg:col-end-8',
    '3-9': 'col-start-2 col-end-13 md:col-start-2 md:col-end-10 lg:col-start-3 lg:col-end-9',
    '4-10': 'col-start-2 col-end-13 md:col-start-2 md:col-end-10 lg:col-start-4 lg:col-end-10',
    '6-12': 'col-start-2 col-end-13 md:col-start-4 md:col-end-13 lg:col-start-6 lg:col-end-12',
    '7-13': 'col-start-2 col-end-13 md:col-start-4 md:col-end-13 lg:col-start-7 lg:col-end-13',
    '8-14': 'col-start-2 col-end-13 md:col-start-4 md:col-end-13 lg:col-start-8 lg:col-end-14'
  }[props.blok.cols ?? '']
})

</script>

<template>
  <ContentWrapper
    v-editable="blok"
    :class-name="blok.class"
    :class="[alignClass, colClass]"
  >
    <p
      v-if="blok.subheader"
      class="mb-3 text-xs text-red-500 font-semibold uppercase tracking-widest drop-shadow-[0_0_3px_rgba(0,0,0,.75)]"
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
