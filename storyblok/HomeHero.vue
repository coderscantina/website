<script setup lang="ts">
import type { HomeHeroStoryblok } from '~/storyblok/types'

defineProps<{ blok: HomeHeroStoryblok }>()

</script>

<template>
  <div
    v-editable="blok"
    class="py-20 mx-auto lg:max-w-full lg:py-32 lg:relative lg:min-h-screen "
  >
    <div class="content-grid">
      <article class="lg:w-6/12">
        <div class="mt-8 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-6/12">
          <picture v-if="blok.image">
            <source
              media="(min-width: 1024px)"
              :srcset="`${blok.image.filename}/m/1080x1080`"
            />
            <img
              :src="`${blok.image.filename}/m/544x366`"
              :alt="blok.image.alt"
              class="h-56 w-full object-cover object-center sm:h-56 shadow-xl lg:inset-0 lg:h-full lg:shadow-none lg:rounded-none"
            />
          </picture>
          <svg
            class="hidden lg:block absolute inset-y-0 left-0 w-24 h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              class="text-gray-900"
              fill="currentColor"
              points="0,0 0,100 100,0"
            />
          </svg>
        </div>
        <div class="mt-8 lg:mt-16 space-y-10 max-w-prose">
          <Headline
            class="text-3xl sm:text-4xl font-bold text-gray-100 leading-tight"
            :headline="blok.header"
          />
          <p class="mt-6 text-gray-500 text-xl leading-relaxed">
            {{ blok.bodytext }}
          </p>
          <div class="flex flex-col items-start space-y-4">
            <StoryblokComponent
              v-for="button in blok.buttons"
              :key="button._uid"
              :blok="button"
            />
          </div>
          <div v-if="blok.logos">
            <StoryblokComponent
              v-for="logo in blok.logos"
              :key="logo._uid"
              :blok="logo"
            />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>

</style>
