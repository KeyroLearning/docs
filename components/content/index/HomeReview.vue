<template>
  <div class="flex flex-col gap-6 bg-ultra-light-grey rounded py-8 px-6">
    <div v-if="$slots.title" class="font-medium paragraph-1 text-primary">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </div>
    <div class="font-light paragraph-1 text-grey">
      <ContentSlot :use="$slots.description" />
    </div>
    <div class="uppercase label-1 text-grey">
      <ContentSlot :use="$slots.name" unwrap="p" />
    </div>
  </div>
</template>
