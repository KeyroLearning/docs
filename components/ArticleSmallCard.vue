<template>
  <nuxt-link :to="path">
    <article class="h-[108px] flex flex gap-6 items-center">
      <img :src="value.image" class="object-cover h-[108px] w-[156px] lg:w-[176px] rounded" alt="" loading="lazy">
      <div class="rounded-b flex flex-col gap-3 flex-1">
        <div class="paragraph-3 text-grey">
          {{ formatDate(value.date) }}
        </div>
        <div class="heading-7 text-indigo">
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
