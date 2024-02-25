<script setup lang="ts">

import type { FooterMenuStoryblok } from '~/storyblok/types'

const localePath = useLocalePath()
defineProps<{ blok: FooterMenuStoryblok }>()

function href({ url, cached_url }: { url: string, cached_url: string }) {
  return url.trim() ? url : localePath(`/${cached_url}`)
}

</script>

<template>
  <div class="grow shrink-0 basis-full sm:basis-0">
    <h3 class="uppercase text-xs font-bold mb-6 tracking-wider">
      {{ blok.header }}
    </h3>
    <div class="space-y-3 flex flex-col">
      <NuxtLink
        v-for="item in blok.menu"
        :key="item._uid"
        v-editable="item"
        :to="href(item?.link)"
        :target="item.link?.target"
        class="font-semibold text-gray-500 hover:text-red-600 focus-visible:text-red-600 transition-colors"
        active-class="text-red-600"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
