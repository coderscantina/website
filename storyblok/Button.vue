<script setup lang="ts">

import type { ButtonStoryblok } from '~/storyblok/types'
defineProps<{ blok: ButtonStoryblok }>()

defineOptions({
  inheritAttrs: false
})

</script>

<template>
  <Btn
    v-editable="blok"
    :variant="blok.variant"
    :color="blok.color"
    :disabled="blok.disabled ? 'disabled' : undefined"
    :block="blok.block"
    :label="blok.label"
    :href="blok.link?.url"
    :target="blok.link?.target"
    v-bind="$attrs"
  />
</template>

<style scoped>
</style>
