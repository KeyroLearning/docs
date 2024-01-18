<template>
  <section class="container mx-auto flex flex-col gap-12">
    <div class="heading-1 text-indigo max-w-[800px]">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </div>
    <div class="flex relative gap-24">
      <div class="min-h-[600px] min-w-[348px] hidden lg:block">
        <img src="/illustrations/team.svg" class="absolute -left-40" alt="">
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
        <slot />
      </div>
    </div>
  </section>
</template>
