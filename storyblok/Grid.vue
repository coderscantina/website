<script setup lang="ts">
import type { GridStoryblok } from '~/storyblok/types'

const props = defineProps<{ blok: GridStoryblok, isFirst: boolean }>()

const columns = computed(() => {
  return {
    2: 'grid-cols-1 md:grid-cols-2 gap-6 md:gap-12',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12',
    4: 'grid-cols-1 md:grid-cols-4 gap-6',
  }[props.blok.columns]
})

</script>

<template>
  <ContentWrapper>
    <div
      v-editable="blok"
      :class="['grid', columns]"
    >
      <StoryblokComponent
        v-for="content in blok.content"
        :key="content._uid"
        v-editable="content"
        :blok="content"
      />
    </div>
  </ContentWrapper>
</template>

<style scoped>

</style>
