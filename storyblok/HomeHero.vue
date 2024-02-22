<script setup lang="ts">
import type { HomeHeroStoryblok } from '~/storyblok/types'

const localePath = useLocalePath()
const props = defineProps<{ blok: HomeHeroStoryblok }>()

const header = computed(() => {
  return (props.blok.header || '')
    .replace(/\*\*(.*)\*\*/g, '<span class="text-red-600">$1</span>')
    .replace(/(?:\r\n|\r|\n)/g, '<br>')
})
</script>

<template>
  <div
    v-editable="blok"
    class="px-4 py-12 max-w-xl mx-auto lg:max-w-full lg:px-0 lg:py-20 lg:relative lg:min-h-screen "
  >
    <div class="xl:max-w-6xl lg:mx-auto">
      <article class="lg:w-6/12 lg:pl-12 lg:pr-8 xl:pl-0">
        <NuxtLink :to="localePath('/')">
          <img
            src="@/assets/logo.svg?url"
            alt="The Coder's Cantina"
            class="h-32 w-32 mt-4"
          />
        </NuxtLink>
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
          <h1
            class="text-3xl sm:text-4xl font-bold text-gray-100 leading-tight"
            v-html="header"
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
    <div class="lg:absolute lg:bottom-0 lg:inset-x-0">
      <div class="lg:px-12 py-12 max-w-xl mx-auto lg:max-w-full">
        <div class="xl:max-w-6xl lg:mx-auto">
          <div class="text-gray-400 text-xs uppercase tracking-widest">
            <NuxtLink
              :to="localePath('/imprint')"
              class="text-white hover:text-red-600"
            >
              Imprint &amp; Data Privacy
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
