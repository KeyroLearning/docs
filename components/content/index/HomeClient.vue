<template>
  <div class="flex flex-col items-center gap-4">
    <div>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>
