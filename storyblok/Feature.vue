<script setup lang="ts">
import type { FeatureStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: FeatureStoryblok }>()

const imageSize = computed(() => {
  return {
    '': '',
    sm: 'x24',
    md: 'x32',
    lg: 'x64'
  }[props.blok.imageSize ?? '']
})

const wrapperClass = computed(() => {
  return {
    '': '',
    inline: '',
    left: 'flex items-start',
    top: 'flex flex-col items-start'
  }[props.blok.imagePosition ?? '']
})

const imageClass = computed(() => {
  return [
    {
      '': '',
      left: 'mr-6',
      inline: 'mr-3 inline-block',
      top: 'mb-4',
    }[props.blok.imagePosition ?? ''],
    {
      '': '',
      sm: 'h-5',
      md: 'h-8',
      lg: 'h-16'
    }[props.blok.imageSize ?? '']
  ]
})

</script>

<template>
  <ContentWrapper>
    <div
      v-editable="blok"
      :class="wrapperClass"
    >
      <img
        v-if="blok.image?.filename && blok.imagePosition !== 'inline'"
        :src="`${blok.image.filename}/m/${imageSize}`"
        :alt="blok.image.alt"
        :class="imageClass"
      />
      <div>
        <h3
          v-if="blok.header"
          class="font-bold text-gray-100 mb-1 flex items-center"
        >
          <img
            v-if="blok.image?.filename && blok.imagePosition === 'inline'"
            :src="`${blok.image.filename}/m/${imageSize}`"
            :alt="blok.image.alt"
            :class="imageClass"
          />
          <span>{{ blok.header }}</span>
        </h3>
        <Markdown :markdown="blok.bodytext"/>
      </div>
    </div>
  </ContentWrapper>
</template>

<style scoped>

</style>
