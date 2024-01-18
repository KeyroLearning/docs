<template>
  <section class="px-8 lg:px-10 py-6">
    <div class="bg-baby-blue w-full py-16 lg:py-32 relative rounded-lg max-w-[1600px] mx-auto">
      <div class="container mx-auto relative mb-64 lg:mb-0">
        <div class="flex flex-col gap-12">
          <h1 class="text-ultra-light-grey heading-1 lg:max-w-[60%]">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h1>
          <div>
            <nuxt-link to="/demonstrations">
              <Button class="bg-indigo text-ultra-light-grey font-medium py-2">
                Démonstration
              </Button>
            </nuxt-link>
          </div>
        </div>
        <img src="/illustrations/digitalization.svg" class="absolute right-5 -bottom-[430px] lg:bottom-[unset] lg:right-12 lg:-top-20 w-[314px] lg:w-[534px]" alt="">
      </div>
    </div>
  </section>
</template>
