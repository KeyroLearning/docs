<template>
  <div class="relative">
    <!-- <layout-header class="z-10 fixed h-24 bg-indigo" inverted /> -->
    <div class="pt-24 flex flex-col gap-12 lg:gap-32">
      <section class="bg-indigo py-20 lg:py-32 mb-24 lg:mb-0">
        <div class="container mx-auto relative">
          <div class="flex flex-col gap-12 pb-12 lg:pb-0">
            <h1 class="text-ultra-light-grey heading-1 maw-w-[100%] lg:max-w-[70%]">
              Oups, 
            </h1>
            <div class="text-ultra-light-grey paragraph-1 maw-w-[100%] lg:max-w-[50%]">
              Cette page n'existe pas ou n'existe plus...
            </div>
            <div>
              <nuxt-link to="/">
                <Button class="bg-primary text-ultra-light-grey text-base">
                  Revenir à l'accueil
                </Button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
