<template>
  <section class="bg-indigo py-20 lg:py-32 mb-24 lg:mb-0">
    <div class="container mx-auto relative">
      <div class="flex flex-col gap-12 pb-12 lg:pb-0">
        <h1 class="text-ultra-light-grey heading-1 maw-w-[100%] lg:max-w-[70%]">
          <ContentSlot :use="$slots.title" />
        </h1>
        <div class="text-ultra-light-grey paragraph-1 maw-w-[100%] lg:max-w-[50%]">
          <ContentSlot :use="$slots.description" />
        </div>
        <div>
          <nuxt-link to="/about">
            <Button class="bg-primary text-ultra-light-grey text-base">
              Démonstration
            </Button>
          </nuxt-link>
        </div>
      </div>
      <img src="/illustrations/home.svg" class="absolute -right-12 -bottom-60 lg:right-14 lg:top-24 w-[195px] lg:w-[306px]" alt="">
    </div>
  </section>
</template>
