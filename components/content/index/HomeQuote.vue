<template>
  <section class="container mx-auto flex justify-center py-12">
    <div class="text-primary text-center heading-2">
      <ContentSlot :use="$slots.default" />
    </div>
  </section>
</template>
