<template>
  <section class="container mx-auto flex flex-col gap-12 items-center">
    <div class="text-center heading-1 text-indigo max-w-[800px]">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-16 justify-center py-12">
      <slot />
    </div>
  </section>
</template>
