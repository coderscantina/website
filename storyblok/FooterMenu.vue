<script setup lang="ts">

import type { FooterMenuStoryblok } from '~/storyblok/types'

defineProps<{ blok: FooterMenuStoryblok }>()

</script>

<template>
  <div class="grow shrink-0 basis-full sm:basis-0">
    <h4 class="uppercase text-xs font-bold mb-6 tracking-wider">
      {{ blok.header }}
    </h4>
    <div class="space-y-3 flex flex-col">
      <NuxtLink
        v-for="item in blok.menu"
        :key="item._uid"
        v-editable="item"
        :href="item.link?.url"
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
