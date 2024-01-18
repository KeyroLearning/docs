<template>
  <section class="bg-primary">
    <div class="container mx-auto relative flex flex-col relative my-12 lg:my-24 gap-8">
      <div class="heading-3 text-ultra-light-grey">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ContentQuery v-for="(path, index) in related" :key="index" v-slot="{ data }" :path="path" find="one">
          <ArticleCard :value="data.navigation" :path="data._path" />
        </ContentQuery>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  related: {
    type: Array,
    required: true
  }
})
</script>
