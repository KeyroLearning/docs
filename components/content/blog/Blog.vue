<template>
  <div class="relative">
    <!-- <layout-header class="z-10 fixed h-24 bg-white" /> -->
      <slot v-bind="{ class: 'pt-24 mb-32 flex flex-col gap-12 lg:gap-24' }" />
  </div>
</template>