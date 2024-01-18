<template>
  <section class="bg-indigo">
    <div class="container mx-auto relative flex relative flex-col lg:flex-row relative gap-12 lg:gap-24 items-center py-16 lg:py-0">
      <div class="flex flex-col gap-8">
        <h2 class="heading-1 text-ultra-light-grey">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <div class="paragraph-1 text-ultra-light-grey">
          <ContentSlot :use="$slots.description" />
        </div>
        <div>
          <a href="mailto:contact@keyro.fr">
            <Button class="bg-primary text-ultra-light-grey text-base">
              Être recontacté(e)
            </Button>
          </a>
        </div>
      </div>
      <div class="min-h-[150px] lg:min-h-[547px] lg:min-w-[348px] mt-24">
        <img src="/illustrations/phone-us.svg" class="absolute bottom-0 -right-12 lg:-right-40 w-[313px] lg:w-[481px]" alt="">
      </div>
    </div>
  </section>
</template>
