<script setup lang="ts">
import type { AllPostsStoryblok, PostStoryblok } from '~/storyblok/types'

defineProps<{blok: AllPostsStoryblok}>()

const { defaults } = useStoryblokHelpers()

const posts = ref<PostStoryblok[]>(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  ...defaults,
  starts_with: 'blog',
  is_startpage: false,
})
posts.value = data.stories

</script>

<template>
  <div
    v-editable="blok"
    class="pt-16"
  >
    <Headline
      v-if="blok.header"
      :headline="blok.header"
      class="text-3xl sm:text-4xl font-bold text-gray-100 leading-tight mb-12"
    />
    <div class="grid md:grid-cols-2 2xl:grid-cols-3 gap-12 sm:gap-6 md:gap-12">
      <PostCard
        v-for="post in posts"
        :key="post.uuid"
        v-editable="post.content"
        :post="post"
        :slug="post.full_slug"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
