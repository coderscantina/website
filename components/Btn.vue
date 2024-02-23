<script setup lang="ts">
import type { NuxtLinkProps } from '#app'
import type { HTMLAttributes } from 'vue'

const variants = {
  primary: {
    lime: 'text-black bg-lime-400 hover:bg-black hover:text-lime-400 focus-visible:bg-black focus-visible:text-lime-400',
    red: 'text-black bg-red-600 hover:bg-black hover:text-red-600 focus-visible:bg-black focus-visible:text-red-600',
    teal: 'text-black bg-teal-500 hover:bg-black hover:text-teal-500 focus-visible:bg-black focus-visible:text-teal-500',
  },
  outlined: {
    lime: 'ring-1 ring-lime-400 ring-inset text-lime-400 hover:bg-black focus-visible:bg-black',
    red: 'ring-1 ring-red-600 ring-inset text-red-600 hover:bg-black focus-visible:bg-black',
    teal: 'ring-1 ring-teal-400 ring-inset text-teal-400 hover:bg-black focus-visible:bg-black',
  },
  ghost: {
    lime: 'text-lime-400 hover:bg-black focus-visible:bg-black',
    red: 'text-red-600 hover:bg-black focus-visible:bg-black',
    teal: 'text-teal-400 hover:bg-black focus-visible:bg-black',
  },
}

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    variant?: keyof typeof variants
    color?: 'red' | 'teal' | 'lime'
    block?: boolean
    active?: boolean
    disabled?: boolean
    loading?: boolean
    exact?: boolean
    label?: string
  } & NuxtLinkProps>(),
  {
    class: undefined,
    variant: 'primary',
    color: 'red',
    default: false,
    active: false,
    disabled: false,
    loading: false,
    exact: false,
    label: undefined
  }
)

defineOptions({
  inheritAttrs: false
})

const classes = computed(() => {
  const colorVariant = variants[props.variant][props.color] || variants[props.variant].red

  return [
    'px-5 py-3 font-bold tracking-wider uppercase',
    props.block ? 'flex w-full' : 'inline-flex',
    'justify-center items-center gap-x-1',
    'focus:outline-none focus-visible:outline-0 flex-shrink-0',
    'transition',
    colorVariant,
    props.class,
    props.disabled ? 'pointer-events-none opacity-75' : undefined,
    props.active ? props.activeClass : undefined,
  ]
})

</script>

<template>
  <button
    v-if="!$props.to && !$props.href"
    v-bind="$attrs"
    :class="classes"
    :type="$attrs.type as undefined || 'button'"
    :disabled="disabled || loading"
  >
    <slot>{{ label }}</slot>
  </button>
  <NuxtLink
    v-else
    #default="{ href, target, rel, navigate, isActive, isExactActive, isExternal }"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="disabled ? undefined : href"
      :aria-disabled="disabled ? 'true' : undefined"
      :role="disabled ? 'link' : undefined"
      :target="target"
      :rel="rel"
      :class="classes"
      @click="(event) => !isExternal && navigate(event)"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }">
        {{ label }}
      </slot>
    </a>
  </NuxtLink>
</template>

<style scoped>
</style>
