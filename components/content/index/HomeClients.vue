<template>
  <section class="container mx-auto flex flex-col items-center">
    <div class="flex gap-16 justify-center py-12 flex-wrap">
      <slot />
    </div>
    <div class="text-center paragraph-2 text-grey">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </div>
  </section>
</template>
