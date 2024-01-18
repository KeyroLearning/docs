<template>
  <section class="bg-baby-blue py-20 lg:py-32 mb-24 lg:mb-0">
    <div class="container mx-auto relative">
      <div class="flex flex-col gap-12 pb-40 lg:pb-0">
        <h1 class="heading-1 text-indigo lg:max-w-[70%]">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <div class="paragraph-1 lg:max-w-[50%]">
          <ContentSlot :use="$slots.description" />
        </div>
      </div>
      <img src="/illustrations/about.svg" class="absolute -bottom-60 lg:right-12 lg:top-6 w-[292px] lg:w-[406px]" alt="">
    </div>
  </section>
</template>
