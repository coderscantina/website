<script setup lang="ts">

const localePath = useLocalePath()
const { config } = useStoryblokHelpers()

const menu = computed(() => {
  return config.value?.content.menu
})

const buttons = computed(() => {
  return config.value?.content.buttons
})

</script>

<template>
  <div class="absolute w-full z-10">
    <div class="content-grid pt-6">
      <div class="flex space-x-6 md:space-x-10 items-center">
        <NuxtLink
          :to="localePath('/')"
          class="shrink-0"
        >
          <img
            src="@/assets/logo.svg?url"
            alt="The Coder's Cantina"
            class="h-12 w-12"
          />
        </NuxtLink>
        <div class="flex space-x-6 md:space-x-10 grow">
          <NuxtLink
            v-for="item in menu"
            :key="item._uid"
            v-editable="item"
            :to="localePath(`/${item.link.cached_url}`)"
            class="font-semibold text-gray-500 hover:text-red-600"
            active-class="text-red-600"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
        <div
          v-if="buttons?.length > 0"
          class="flex ml-auto space-y-6 items-stretch"
        >
          <StoryblokComponent
            v-for="item in buttons"
            :key="item._uid"
            v-editable="item"
            :blok="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
