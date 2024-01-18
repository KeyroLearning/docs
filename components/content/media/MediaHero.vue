<template>
  <section class="px-8 lg:px-10 py-6">
    <div class="bg-primary w-full py-12 relative rounded-lg max-w-[1600px] min-h-[300px] lg:min-h-[240px] mx-auto flex items-end">
      <img src="/illustrations/media.svg" class="absolute -right-8 lg:right-0 top-6 lg:top-12 w-[160px] lg:w-[251px]" alt="">
      <div class="container mx-auto relative">
        <div class="flex flex-col gap-12">
          <h1 class="text-ultra-light-grey heading-1 max-w-[60%]">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  highlighted: {
    type: String,
    default: () => null
  }
})
</script>
