<script setup lang="ts">
import { annotate, annotationGroup } from 'rough-notation'

const props = withDefaults(defineProps<{
  headline: string
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>(), {
  element: 'h1'
})

const el = ref<HTMLElement | null>(null)
const header = computed(() => {
  return (props.headline || '')
    .replace(/\*\*(.*)\*\*/g, '<span class="text-red-600">$1</span>')
    .replace(/__(.*)__/g, '<span data-type="underline">$1</span>')
    .replace(/==(.*)==/g, '<span data-type="highlight">$1</span>')
    .replace(/\+\+(.*)\+\+/g, '<span data-type="circle">$1</span>')
    .replace(/(?:\r\n|\r|\n)/g, '<br>')
})

function initAnnotation() {
  if (el.value) {
    const anims = []
    const elems = el.value.querySelectorAll('[data-type]')

    elems.forEach((elem) => anims.push(annotate(elem, {
      type: elem.dataset.type || 'highlight',
      color: '#ff1744'
    })))
    annotationGroup(anims).show()
  }
}

watch(() => header.value, initAnnotation, { flush: 'post' })

onMounted(initAnnotation)

</script>

<template>
  <h1
    ref="el"
    v-html="header"
  />
</template>

<style scoped>

</style>
