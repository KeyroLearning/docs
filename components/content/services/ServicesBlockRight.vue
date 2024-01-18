<template>
  <section class="container mx-auto relative flex flex-col lg:flex-row gap-12 lg:gap-24">
    <div>
      <ContentSlot :use="$slots.image" unwrap="p" />
    </div>
    <div class="flex-1 flex flex-col gap-10 justify-center">
      <h2 class="heading-2 text-ultra-dark-blue">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h2>
      <div class="paragraph-1 text-grey">
        <ContentSlot :use="$slots.description" />
      </div>
    </div>
  </section>
</template>
