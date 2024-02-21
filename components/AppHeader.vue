<script setup lang="ts">
const localePath = useLocalePath()

</script>

<template>
  <div class="absolute w-full z-10">
    <div class="content-grid">
      <div class="flex justify-between">
        <NuxtLink :to="localePath('/')">
          <img
            src="@/assets/logo.svg?url"
            alt="The Coder's Cantina"
            class="h-20 w-20 mt-4"
          />
        </NuxtLink>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
