<script setup lang="ts">
import type { FeatureStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: FeatureStoryblok, isFirst?: boolean }>()

const imageSize = computed(() => {
  const sizes = {
    left: {
      '': '',
      sm: '24x',
      md: '32x',
      lg: '64x'
    },
    top: {
      '': '',
      sm: 'x24',
      md: 'x32',
      lg: 'x64'
    }
  }
  const size = props.blok.imagePosition === 'top' ? sizes.top : sizes.left

  return size[props.blok.imageSize ?? '']
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
  const sizes = {
    left: {
      '': '',
      sm: 'w-5',
      md: 'w-8',
      lg: 'w-16'
    },
    top: {
      '': '',
      sm: 'h-5',
      md: 'h-8',
      lg: 'h-16'
    }
  }

  const size = props.blok.imagePosition === 'top' ? sizes.top : sizes.left

  return [
    {
      '': '',
      left: 'mr-4 md:mr-6',
      inline: 'mr-3 inline-block',
      top: 'mb-4',
    }[props.blok.imagePosition ?? ''],
    size[props.blok.imageSize ?? '']
  ]
})

</script>

<template>
  <div
    v-editable="blok"
    :class="wrapperClass"
  >
    <img
      v-if="blok.image?.filename && blok.imagePosition !== 'inline'"
      :src="`${blok.image.filename}/m/${imageSize}`"
      :alt="blok.image.alt"
      :class="[imageClass, 'shrink-0 grow-0']"
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
          :loading="isFirst ? 'eager' : 'lazy'"
        />
        <span>{{ blok.header }}</span>
      </h3>
      <Markdown :markdown="blok.bodytext"/>
    </div>
  </div>
</template>

<style scoped>

</style>
