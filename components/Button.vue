<template>
  <button v-bind="$attrs" class="rounded py-2 lg:py-3 px-6 lg:px-8 m-auto">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    default: () => undefined
  },
  to: {
    type: String,
    default: () => undefined
  }
})
</script>
