<script setup lang="ts">
import type { HeroStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: HeroStoryblok, isFirst: boolean }>()

const bottomPoints = computed(() => {
  return props.blok.clipBottom === 'left'
    ? '0,0 0,100 100,100'
    : '0,100 100,100 100,0'
})

const topPoints = computed(() => {
  return props.blok.clipTop === 'left'
    ? '0,0 0,100, 100,0'
    : '0,0 100,100 100,0'
})

const wrapperClass = computed(() => {
  return {
    '': props.isFirst ? 'pt-24' : '',
    sm: 'md:py-8',
    md: 'md:py-16',
    lg: 'md:py-24',
    xl: 'md:py-32',
  }[props.blok.contentPadding ?? '']
})

</script>
<template>
  <div
    v-editable="blok"
    :class="['content-full-width overflow-clip relative', wrapperClass, {
      '-mt-20': blok.clipTop && !isFirst,
      '-mb-20': blok.clipBottom
    }]"
  >
    <picture
      v-if="blok.image"
    >
      <source
        media="(min-width: 1024px)"
        :srcset="`${blok.image.filename}/m/1920x720`"
      />
      <source
        media="(min-width: 768px)"
        :srcset="`${blok.image.filename}/m/1024x768`"
      />
      <source
        media="(min-width: 640px)"
        :srcset="`${blok.image.filename}/m/768x576`"
      />
      <img
        :src="`${blok.image.filename}/m/480x600`"
        :alt="blok.image.alt"
        class="absolute inset-0 object-cover object-center w-full"
      />
    </picture>
    <svg
      v-if="blok.clipTop"
      class="absolute h-10 md:h-16 w-full top-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        class="text-gray-900"
        fill="currentColor"
        :points="topPoints"
      />
    </svg>
    <svg
      v-if="blok.clipBottom"
      class="absolute h-10 md:h-16 w-full bottom-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        class="text-gray-900"
        fill="currentColor"
        :points="bottomPoints"
      />
    </svg>
    <div class="content-grid py-24 relative z-1">
      <StoryblokComponent
        v-for="content in blok.content"
        :key="content._uid"
        :blok="content"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
