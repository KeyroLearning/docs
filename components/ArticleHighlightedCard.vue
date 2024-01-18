<template>
  <nuxt-link :to="path">
    <article class="lg:w-[464px] flex flex-col rounded">
      <img :src="value.image" class="object-cover h-[228px] w-[464px] rounded-t" alt="" loading="lazy">
      <div class="px-6 py-4 bg-ultra-light-grey rounded-b flex flex-col gap-3">
        <div class="flex items-center gap-4">
          <div v-if="value.tag" class="bg-light-grey rounded paragraph-3 px-3 py-2 text-indigo">
            {{ value.tag }}
          </div>
          <div class="paragraph-3 text-grey">
            {{ formatDate(value.date) }}
          </div>
        </div>
        <div class="heading-4 text-primary">
          {{ value.title }}
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script lang="ts" setup>
defineProps({
  path: {
    type: String,
    required: true
  },
  value: {
    type: Object,
    required: true
  }
})

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp)
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
}
</script>
