<script setup lang="ts">
const path = ref('/')
const content = await queryContent(path.value).findOne()
useSeoMeta({
  title: content.title,
  ogTitle: content.title,
  description: content.description,
  ogDescription: content.description
})
</script>

<template>
  <div class="relative">
    <!-- <layout-header class="z-10 fixed h-24 bg-indigo" inverted /> -->
    <ContentRenderer :value="content" class="mt-24 mb-32 flex flex-col gap-12 lg:gap-32" />
  </div>
</template>
