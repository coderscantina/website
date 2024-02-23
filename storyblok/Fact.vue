<script setup lang="ts">

import type { FactStoryblok } from '~/storyblok/types'
import { annotate } from 'rough-notation'

const props = defineProps<{ blok: FactStoryblok, isFirst: boolean }>()
const el = ref<HTMLElement | null>(null)

const color = computed(() => {
  if (props.blok.annotate === 'highlight') {
    return 'text-white'
  }
  return {
    red: 'text-red-600',
    teal: 'text-teal-500',
    lime: 'text-lime-400',
  }[props.blok.color || 'red']
})

function initAnnotation() {
  if (el.value && props.blok.annotate) {
    annotate(el.value, {
      type: props.blok.annotate,
      color: '#ff1744'
    }).show()
  }
}

watchEffect(initAnnotation, { flush: 'post' })

onMounted(initAnnotation)

</script>

<template>
  <div v-editable="blok">
    <h4 :class="['text-2xl font-bold', color]">
      <span ref="el">{{ blok.value }}</span>
    </h4>
    <p class="text-gray-500">{{ blok.title }}</p>
  </div>
</template>

<style scoped>

</style>
