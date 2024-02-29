<script setup lang="ts">
import { marked, Renderer } from 'marked'

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
  provider: {
    type: String as () => 'none' | 'storyblok',
    required: false,
    default: 'none',
  }
})

const markdownOptions = computed(() => {
  const renderer = new Renderer()
  renderer.paragraph = paragraph

  return {
    renderer
  }
})

function paragraph(src: string) {
  if (props.provider === 'storyblok') {
    // storyblok uses this syntax for breaks
    // https://github.com/storyblok/storyblok/issues/71
    if (src === '<code> </code>') {
      return '<br>'
    }
  }

  return `<p>${src}</p>`
}

const html = computed(() => {
  return marked(props.markdown, markdownOptions.value)
})

function onClick(e: MouseEvent) {
  if (!((e.target as HTMLElement).tagName === 'A')) {
    return
  }

  e.preventDefault()
  const href = (e.target as HTMLLinkElement).href
  if (/^https?:/.test(href)) {
    // open href in new window
    window.open(href, '_blank')
    return
  }

  navigateTo((new URL(href, useRequestURL()).pathname))
}

</script>

<template>
  <div
    class="prose"
    @click.capture="onClick"
    v-html="html"
  />
</template>
