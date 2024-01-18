<template>
  <section class="container mx-auto flex justify-center py-12">
    <div>
      <nuxt-link :to="to">
        <Button class="bg-primary text-ultra-light-grey text-base">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </Button>
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    default: () => undefined
  }
})
</script>
