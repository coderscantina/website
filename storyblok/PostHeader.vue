<script setup lang="ts">

import dayjs from 'dayjs'
import type { PostHeaderStoryblok, PostStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: PostHeaderStoryblok, story: PostStoryblok }>()

const date = computed(() => {
  return dayjs(props.blok.created_at).format('MMMM YYYY')
})
</script>

<template>
  <ContentWrapper
    v-editable="blok"
    class-name="narrow"
    class="-mb-12"
  >
    <p class="text-gray-500 text-xs uppercase tracking-wider">{{ date }}</p>
    <Headline
      class="mt-3 text-3xl sm:text-4xl font-bold text-gray-100 leading-tight"
      :headline="story.title"
    />
  </ContentWrapper>
</template>

<style scoped>

</style>
