<template>
  <section class="px-8 lg:px-10 py-6">
    <div class="bg-primary w-full py-16 lg:py-32 relative rounded-lg max-w-[1600px] mx-auto">
      <div class="container mx-auto relative mb-64 lg:mb-0">
        <div class="flex flex-col gap-12">
          <h1 class="text-ultra-light-grey heading-1 lg:max-w-[50%]">
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
        <img src="/illustrations/administrative.svg" class="absolute -left-8 -bottom-[380px] lg:left-[unset] lg:right-32 lg:-top-8 w-[290px] lg:w-[512px]" alt="">
      </div>
      <img src="/illustrations/administrative-extra.svg" class="absolute right-0 bottom-60 lg:bottom-[unset] lg:top-10 w-[95px] lg:w-[167px]" alt="">
    </div>
  </section>
</template>
