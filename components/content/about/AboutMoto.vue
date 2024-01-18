<template>
  <section class="container mx-auto flex flex-col items-center gap-12">
    <div class="text-primary text-center heading-2">
      <ContentSlot :use="$slots.title" />
    </div>
    <div class="text-grey lg:text-center paragraph-2 max-w-[800px]">
      <ContentSlot :use="$slots.description" />
    </div>
  </section>
</template>
