<script setup>

const route = useRoute()
const slug = route.params.slug || 'home'

const story = await useStoryblok(slug, { version: 'draft' })

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
