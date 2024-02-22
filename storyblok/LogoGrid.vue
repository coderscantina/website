<script setup lang="ts">

import type { LogoGridStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: LogoGridStoryblok }>()

</script>

<template>
  <div v-editable="blok">
    <h3 class="text-lg">{{ blok.header }}</h3>
    <div class="flex space-x-6">
      <NuxtLink
        v-for="logo in blok.logos"
        :key="logo._uid"
        v-editable="logo"
        :to="logo.link?.url"
        :target="logo.link?.target"
        :title="logo.image?.alt"
        class="opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <img
          :src="logo.image?.filename"
          :alt="logo.image?.alt"
          class="w-24 h-16"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
