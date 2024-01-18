<template>
  <div class="flex flex-col gap-3">
    <div class="bg-ultra-light-grey">
      <ContentSlot :use="$slots.picture" unwrap="p" />
    </div>
    <div class="font-medium paragraph-1 text-indigo">
      <ContentSlot :use="$slots.name" />
    </div>
    <div class="paragraph-2 text-grey">
      <ContentSlot :use="$slots.function" />
    </div>
  </div>
</template>
