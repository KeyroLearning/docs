<template>
  <section class="container mx-auto relative flex flex-col lg:flex-row gap-12 lg:gap-24 lg:rounded-lg bg-medium-majenta py-12">
    <div class="lg:min-w-[420px] lg:min-h-[380px] lg:position-[unset]">
      <div class="lg:absolute -top-28 lg:top-[unset] lg:-left-10">
        <ContentSlot :use="$slots.image" unwrap="p" />
      </div>
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
