<template>
  <div class="flex flex-col items-center gap-4">
    <div>
      <ContentSlot :use="$slots.image" unwrap="p" />
    </div>
    <div class="text-primary heading-6 text-center">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </div>
    <div class="text-center paragraph-1 text-grey">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </div>
  </div>
</template>
