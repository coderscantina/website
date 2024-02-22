<script setup lang="ts">
import dayjs from 'dayjs'
import type { PostStoryblok } from '~/storyblok/types'

const localePath = useLocalePath()

defineProps<{ post: PostStoryblok, slug: string }>()

</script>

<template>
  <NuxtLink
    :to="localePath(`/${slug}`)"
    class="group space-y-4 hover:text-red-600"
  >
    <div class="overflow-clip">
      <img
        :src="`${post.content.teaser.filename}/m/743x417`"
        :alt="post.content.teaser.alt"
        class="w-full transition-transform duration-500 ease-quart-out group-hover:ease-circ-out group-hover:rotate-2 group-hover:scale-110"
      >
    </div>
    <div>
      <h3 class="text-xl font-bold mb-1">
        {{ post.name }}
      </h3>
      <div class="text-gray-500">
        {{ dayjs(post.created_at).format('MMMM DD, YYYY') }}
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
