<template>
  <section class="px-8 lg:px-10 py-6">
    <div class="bg-primary w-full py-16 lg:py-40 relative rounded-lg max-w-[1600px] mx-auto">
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
        <img src="/illustrations/operational.svg" class="absolute -left-2 lg:left-[unset] lg:right-12 -bottom-[430px] lg:bottom-[unset] lg:-top-32" alt="">
      </div>
    </div>
  </section>
</template>
