<template>
  <section class="bg-indigo">
    <div class="container mx-auto relative flex flex-col lg:flex-row relative gap-12 lg:gap-24 items-center py-16 lg:py-0">
      <div class="flex flex-col gap-8">
        <h2 class="heading-1 text-ultra-light-grey">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <div class="flex flex-col lg:flex-row gap-4">
          <div>
            <a href="mailto:contact@keyro.fr">
              <Button class="bg-primary text-ultra-light-grey py-2">
                Nous contacter
              </Button>
            </a>
          </div>
          <div>
            <nuxt-link to="/demonstrations">
              <Button class="bg-ultra-light-grey text-indigo font-medium py-2">
                Démonstration
              </Button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="min-h-[107px] lg:min-h-[547px] lg:min-w-[400px] mt-24">
        <img src="/illustrations/administrative-try-it.svg" class="absolute -right-4 lg:-right-10 bottom-0 w-[300px] lg:w-[414px]" alt="">
      </div>
    </div>
  </section>
</template>
