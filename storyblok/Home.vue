<script setup lang="ts">
import type { HomeStoryblok } from '~/storyblok/types'

const localePath = useLocalePath()
const { setMetaFromPage } = useStoryblokHelpers()
const props = defineProps<{ blok: HomeStoryblok }>()

setMetaFromPage(props.blok)

</script>

<template>
  <main
    v-editable="blok"
  >
    <AppHeader/>
    <StoryblokComponent
      v-for="bodyBlok in blok.body"
      :key="bodyBlok._uid"
      :blok="bodyBlok"
    />
    <div class="-mt-16">
      <div class="content-grid">
        <div class="text-gray-400 text-xs uppercase tracking-widest">
          <NuxtLink
            v-for="menu in blok.menu"
            :key="menu._uid"
            v-editable="menu"
            :to="localePath(`/${menu.link?.cached_url}`)"
            class="text-white hover:text-red-600"
          >
            {{ menu.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
