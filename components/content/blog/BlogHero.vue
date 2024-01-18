<template>
  <section class="px-8 lg:px-10 py-6">
    <div class="bg-indigo w-full py-16 relative rounded-lg max-w-[1600px] min-h-[300px] lg:min-h-[453px] mx-auto">
      <img src="/illustrations/blog.svg" class="absolute left-0 bottom-0 rounded-bl-lg" alt="">
      <div class="container mx-auto relative">
        <div class="flex flex-col gap-12">
          <h1 class="text-ultra-light-grey heading-1 max-w-[60%]">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h1>
        </div>
        <div class="hidden lg:block">
          <ContentQuery v-if="highlighted" v-slot="{ data }" :path="highlighted" find="one">
            <div v-if="data" class="absolute right-12 top-24">
              <ArticleHighlightedCard :value="data.navigation" :path="data._path" />
            </div>
          </ContentQuery>
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
