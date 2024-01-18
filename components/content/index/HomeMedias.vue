<template>
  <section class="container mx-auto relative flex flex-col gap-12">
    <div class="flex-1 flex flex-col gap-6 justify-center">
      <div class="uppercase text-primary label-2">
        <ContentSlot :use="$slots.tag" unwrap="p" />
      </div>
      <div class="flex flex-col lg:flex-row gap-6 items-end justify-between">
        <h3 class="flex-1 heading-3 text-ultra-dark-blue max-w-[600px]">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <div class="hidden lg:block">
          <nuxt-link to="/mediatheque">
            <Button class="bg-primary text-ultra-light-grey paragraph-1">
              Tout voir
            </Button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div>
      <ContentQuery v-slot="{ data }" path="/mediatheque/" :limit="4" :sort="{ 'navigation.date': -1 }">
        <div v-if="data" class="flex flex-col lg:flex-row gap-6">
          <div v-for="(item, index) of data.slice(0, 1)" :key="index">
            <ArticleHighlightedCard :value="item.navigation" :path="item._path" />
          </div>
          <div class="flex flex-col gap-5">
            <div v-for="(item, index) of data.slice(1, data.length)" :key="index">
              <ArticleSmallCard :value="item.navigation" :path="item._path" />
            </div>
          </div>
        </div>
      </ContentQuery>
    </div>
    <div class="block lg:hidden flex flex-col wrap">
      <nuxt-link to="/mediatheque" class="mx-auto">
        <Button class="bg-primary text-ultra-light-grey paragraph-1">
          Tout voir
        </Button>
      </nuxt-link>
    </div>
  </section>
</template>
