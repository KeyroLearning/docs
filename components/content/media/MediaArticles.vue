<template>
  <section class="container mx-auto flex flex-col gap-8">
    <ContentQuery v-slot="{ data }" path="/mediatheque/" :sort="{ 'navigation.date': -1 }" :where="{ 'navigation.title': { $contains: where } }">
      <div class="flex justify-between">
        <div class="w-[355px]">
          <input v-model="search" type="text" class="bg-ultra-light-grey paragraph-1 text-indigo font-normal rounded w-full px-6 py-2.5" placeholder="Rechercher ...">
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <template v-if="data">
          <div v-for="(item, index) of data.slice(0, 6 * page)" :key="index">
            <ArticleCard :value="item.navigation" :path="item._path" />
          </div>
          <Button v-if="data.length > (6 * page)" class="bg-primary text-ultra-light-grey font-medium py-2 col-span-3 my-12" @click="() => page = page + 1">
            Charger plus
          </Button>
        </template>
      </div>
    </ContentQuery>
  </section>
</template>

<script setup lang="ts">

const page = ref(1)
const search = ref<string | null>(null)
const where = computed(() => search.value?.toLowerCase() || '')

</script>
