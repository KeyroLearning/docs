<template>
  <section class="bg-baby-blue">
    <div class="container mx-auto relative flex flex-col-reverse lg:flex-row relative gap-12 lg:gap-24 items-center py-16 lg:py-0">
      <div class="min-h-[170px] lg:min-h-[547px] lg:min-w-[500px] mt-24">
        <img src="/illustrations/innovation-try-it.svg" class="absolute left-0 bottom-0 w-[328px] lg:w-[559px]" alt="">
      </div>
      <div class="flex flex-col gap-8">
        <h2 class="heading-1 text-ultra-light-grey">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <div class="flex flex-col lg:flex-row gap-4">
          <div>
            <a href="mailto:contact@keyro.fr">
              <Button class="bg-indigo text-ultra-light-grey py-2">
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
    </div>
  </section>
</template>
