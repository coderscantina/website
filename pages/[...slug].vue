<script setup lang="ts">
const { $preview } = useNuxtApp()

const version = $preview ? 'draft' : 'published'
const route = useRoute()
const slug = (route.params.slug || ['home']).join('/')
const { locale } = useI18n()

const story = await useAsyncStoryblok(slug, { version, language: locale.value })

</script>

<template>
  <div>
    <NuxtLayout name="default">
      <StoryblokComponent
        v-if="story"
        :blok="story.content"
      />
    </NuxtLayout>
  </div>
</template>
