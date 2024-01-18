<template>
  <section class="container mx-auto flex justify-center py-12">
    <iframe width="100%" class="h-[1400px] sm:h-[780px] lg:h-[760px]" frameborder="0" :src="src" />
  </section>
</template>

<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>
