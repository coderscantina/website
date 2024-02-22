<script setup lang="ts">

const { config } = useStoryblokHelpers()
const year = computed(() => new Date().getFullYear())

</script>

<template>
  <div class="bg-black py-12">
    <div
      v-if="config"
      class="content-grid space-y-12"
    >
      <div class="md:flex">
        <div class="space-y-6">
          <img
            src="@/assets/logo.svg?url"
            alt="The Coder's Cantina"
            class="h-12 w-12"
          />
          <p
            v-editable="config.content"
            class="max-w-prose mr-12"
          >
            {{ config.content.footer_about }}
          </p>
        </div>
        <div class="flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-12 mt-12 md:mt-0 ml-auto">
          <StoryblokComponent
            v-for="menu in config.content.footerMenus"
            :key="menu._uid"
            v-editable="menu"
            :blok="menu"
          />
        </div>
      </div>
      <div class="space-x-4">
        <div
          v-editable="config.content"
          class="text-center text-sm"
        >
          {{ config?.content?.copyright.replace(/{year}/g, year) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
