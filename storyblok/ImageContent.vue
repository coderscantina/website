<script setup lang="ts">
import type { ImageContentStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: ImageContentStoryblok, isFirst: boolean }>()

const contentClass = computed(() => {
  return [
    props.blok.class === 'full' ? 'content-grid md:py-32 2xl:py-48 w-full' : '',
  ].join(' ')
})

const wrapperClass = computed(() => {
  return [
    props.blok.order === 'right' ? 'flex-col-reverse md:flow-row' : 'flex-col md:flow-row-reverse'
  ].join(' ')
})

const imageClass = computed(() => {
  return [
    props.blok.imageFit === 'contain' ? 'w-full z-[-1]' : 'w-1/2 md:absolute md:object-cover md:h-full md:top-0 z-[-1]',
    props.blok.imageFit !== 'contain'
      ? (props.blok.order === 'right' ? '-mb-10 md:mb-0 md:left-0 md:pr-6' : '-mt-10 md:mt-0 md:right-0 md:pl-3')
      : ''
  ]
})

const imgClass = computed(() => {
  return [
    props.blok.imageFit === 'contain' ? 'object-contain' : 'object-cover',
    'w-full h-full'
  ]
})

const innerClass = computed(() => {
  return [
    props.blok.order === 'right' ? 'md:col-start-2 md:ml-3' : 'md:col-start-1 md:mr-3',
    {
      '': '',
      sm: 'md:py-8',
      md: 'md:py-16',
      lg: 'md:py-24',
      xl: 'md:py-32',
    }[props.blok.contentPadding ?? '']
  ].join(' ')
})

const clipPoints = computed(() => {
  return props.blok.order === 'right' ? '0,0 0,100 100,100' : '0,0 0,100 100,0'
})

</script>

<template>
  <ContentWrapper
    v-editable="blok"
    :class-name="blok.class"
  >
    <div :class="['flex items-center gap-6 relative', wrapperClass]">
      <div :class="contentClass">
        <div class="grid md:grid-cols-2">
          <div :class="[innerClass, 'space-y-6']">
            <StoryblokComponent
              v-for="content in blok.content"
              :key="content._uid"
              v-editable="content"
              :blok="content"
            />
          </div>
          <div :class="imageClass">
            <div class="relative md:h-full w-full">
              <img
                v-if="blok.image"
                :src="`${blok.image.filename}/m/`"
                :alt="blok.image.alt"
                :loading="isFirst ? 'eager' : 'lazy'"
                :class="imgClass"
              />

              <svg
                v-if="blok.imageFit !== 'contain'"
                :class="['absolute h-10 md:h-16 w-full md:hidden', props.blok.order === 'left' ? 'top-0' : 'bottom-0']"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  class="text-gray-900"
                  fill="currentColor"
                  :points="clipPoints"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentWrapper>
</template>

<style scoped>

</style>
