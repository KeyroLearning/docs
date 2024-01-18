<template>
  <section class="bg-indigo py-12 lg:py-20">
    <div class="container mx-auto relative">
      <div class="flex flex-col gap-12 pb-12 lg:pb-0">
        <h1 class="text-ultra-light-grey heading-1 maw-w-[100%] lg:max-w-[80%]">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <div class="text-ultra-light-grey paragraph-1 maw-w-[100%] lg:max-w-[50%]">
          <ContentSlot :use="$slots.description" />
        </div>
      </div>
    </div>
  </section>
</template>
