<script setup lang="ts">

const props = defineProps<{ className: string }>()

const classMap = {
  narrow: 'content-narrow'
}

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
