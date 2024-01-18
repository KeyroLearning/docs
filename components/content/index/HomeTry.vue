<template>
  <section class="bg-primary">
    <div class="container mx-auto relative flex flex-col lg:flex-row relative gap-12 lg:gap-24 items-center py-16 lg:py-0">
      <div class="flex flex-col gap-8">
        <h2 class="heading-1 text-ultra-light-grey">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <div class="flex flex-col lg:flex-row gap-4">
          <div>
            <a href="mailto:contact@keyro.fr">
              <Button class="bg-indigo text-ultra-light-grey">
                Nous contacter
              </Button>
            </a>
          </div>
          <div>
            <nuxt-link to="/about">
              <Button class="bg-ultra-light-grey text-indigo font-medium">
                Démonstration
              </Button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="min-h-[107px] lg:min-h-[547px] lg:min-w-[348px] mt-24">
        <img src="/illustrations/home-try-it-extra.svg" class="absolute right-[500px] top-0" alt="">
        <img src="/illustrations/home-try-it.svg" class="absolute -right-8 lg:-right-40 bottom-0" alt="">
      </div>
    </div>
  </section>
</template>
