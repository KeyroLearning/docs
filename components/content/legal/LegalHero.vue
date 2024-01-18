<template>
  <section class="bg-indigo py-20 lg:py-32 mb-24 lg:mb-0">
    <div class="container mx-auto relative">
      <div class="flex flex-col gap-12 pb-12 lg:pb-0">
        <h1 class="text-ultra-light-grey heading-1 maw-w-[100%] lg:max-w-[80%]">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
      </div>
    </div>
  </section>
</template>
