<template>
  <section class="container mx-auto relative">
    <div class="content flex flex-col gap-8">
      <ContentSlot :use="$slots.default" />
    </div>
  </section>
</template>

<style scoped>

.content :deep(p) {
  @apply paragraph-1 text-grey leading-[32px]
}

.content :deep(h2) {
  @apply heading-3 text-indigo
}

.content :deep(ul) {
  @apply paragraph-1 text-grey leading-[32px] list-disc ml-6
}

</style>
