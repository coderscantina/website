<script setup lang="ts">

import type { ButtonStoryblok } from '~/storyblok/types'
const localePath = useLocalePath()

defineProps<{ blok: ButtonStoryblok }>()

defineOptions({
  inheritAttrs: false
})
function href({ url, cached_url }: { url: string, cached_url: string }) {
  return url.trim() ? url : localePath(`/${cached_url}`)
}
</script>

<template>
  <Btn
    v-editable="blok"
    :variant="blok.variant"
    :color="blok.color"
    :disabled="blok.disabled ? 'disabled' : undefined"
    :block="blok.block"
    :label="blok.label"
    :href="href(blok.link)"
    :target="blok.link?.target"
    v-bind="$attrs"
  />
</template>

<style scoped>
</style>
