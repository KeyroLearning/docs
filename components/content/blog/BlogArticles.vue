<template>
  <section class="container mx-auto">
    <div class="flex lg:grid grid-cols-3 flex-col gap-6">
      <ContentQuery v-slot="{ data }" path="/blog/" :sort="{ 'navigation.date': -1 }">
        <template v-if="data">
          <div v-for="(item, index) of data.slice(0, 6 * page)" :key="index">
            <ArticleCard :value="item.navigation" :path="item._path" />
          </div>
          <Button v-if="data.length > (6 * page)" class="bg-primary text-ultra-light-grey font-medium py-2 col-span-3 my-12" @click="() => page = page + 1">
            Charger plus
          </Button>
        </template>
      </ContentQuery>
    </div>
  </section>
</template>

<script setup lang="ts">

const page = ref(1)

</script>
