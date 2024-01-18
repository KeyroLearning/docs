<template>
  <section class="container mx-auto relative flex flex-col-reverse lg:flex-row gap-12 lg:gap-24">
    <div class="flex-1 flex flex-col gap-10 justify-center">
      <div class="flex gap-4 items-center">
        <div class="bg-primary p-1.5 rounded-lg">
          <ContentSlot :use="$slots.icon" unwrap="p" />
        </div>
        <div class="uppercase text-primary label-2">
          <ContentSlot :use="$slots.feature" unwrap="p" />
        </div>
      </div>
      <h2 class="heading-2 text-ultra-dark-blue">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="paragraph-1 text-grey">
        <ContentSlot :use="$slots.description" />
      </div>
    </div>
    <div>
      <ContentSlot :use="$slots.image" unwrap="p" />
    </div>
  </section>
</template>
