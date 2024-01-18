<template>
  <section class="bg-primary py-20 lg:py-32 mb-40 lg:mb-0">
    <div class="container mx-auto relative">
      <div class="flex flex-col gap-12 pb-60 lg:pb-0">
        <h1 class="heading-1 maw-w-[100%] lg:max-w-[50%] text-ultra-light-grey">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>
        <div class="paragraph-1 maw-w-[100%] lg:max-w-[50%] text-ultra-light-grey">
          <ContentSlot :use="$slots.description" />
        </div>
        <div>
          <a href="mailto:contact@keyro.fr">
            <Button class="bg-indigo text-ultra-light-grey text-base">
              Être recontacté(e)
            </Button>
          </a>
        </div>
      </div>
      <img src="/illustrations/services.svg" class="absolute -right-12 -bottom-[290px] lg:bottom-[unset] lg:right-0 lg:-top-8" alt="">
    </div>
  </section>
</template>
