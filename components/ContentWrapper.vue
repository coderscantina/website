<script setup lang="ts">

const classMap = {
  narrow: 'content-narrow',
  full: 'content-full-width'
}

const props = defineProps<{ className: keyof typeof classMap }>()

const cls = computed(() => {
  return classMap[props.className] || ''
})

</script>

<template>
  <div :class="cls">
    <slot/>
  </div>
</template>

<style scoped>

</style>
