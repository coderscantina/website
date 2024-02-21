<script setup lang="ts">

const year = computed(() => new Date().getFullYear())

</script>

<template>
  <div class="bg-black py-10">
    <div class="content-grid">
      <div class="space-x-4">
        <div class="text-center">
          {{ $t('footer.copyright', { year }) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
