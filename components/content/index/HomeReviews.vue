<template>
  <section class="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center py-12">
    <div class="flex flex-col gap-6 justify-center">
      <slot name="col-1" />
    </div>
    <div class="flex flex-col gap-6 justify-center">
      <slot name="col-2" />
    </div>
    <div class="flex flex-col gap-6 justify-center">
      <slot name="col-3" />
    </div>
  </section>
</template>
