<template>
  <div class="flex flex-col items-center gap-4">
    <div class="bg-light-grey p-2.5 rounded-lg">
      <ContentSlot :use="$slots.icon" unwrap="p" />
    </div>
    <div class="font-medium heading-1 text-center">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </div>
    <div class="text-center paragraph-1 text-grey">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </div>
  </div>
</template>
