<template>
  <div class="relative">
      <!-- <layout-header class="z-10 fixed h-24 bg-primary" inverted variant /> -->
      <slot v-bind="{ class: 'pt-24 flex flex-col gap-24 lg:gap-48' }" />
  </div>
</template>