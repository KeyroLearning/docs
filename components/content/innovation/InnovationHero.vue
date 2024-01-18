<template>
  <section class="px-8 lg:px-10 py-6">
    <div class="bg-indigo w-full py-16 lg:py-40 relative rounded-lg max-w-[1600px] mx-auto">
      <img src="/illustrations/innovation-extra.svg" class="absolute right-0 -bottom-[10px] lg:-bottom-[18px] w-[160px] lg:w-[287px]" alt="">
      <div class="container mx-auto relative mb-64 lg:mb-0">
        <div class="flex flex-col gap-12">
          <h1 class="text-ultra-light-grey heading-1 lg:max-w-[60%]">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h1>
          <div>
            <nuxt-link to="/demonstrations">
              <Button class="bg-white text-indigo font-medium py-2">
                Démonstration
              </Button>
            </nuxt-link>
          </div>
        </div>
        <img src="/illustrations/innovation.svg" class="absolute -left-4 lg:left-[unset] lg:right-72 -bottom-[450px] lg:bottom-[unset] lg:-top-6 w-[224px] lg:w-[401px]" alt="">
      </div>
    </div>
  </section>
</template>
