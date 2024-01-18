<template>
  <section class="bg-primary">
    <div class="container mx-auto relative flex relative flex-col-reverse lg:flex-row relative gap-12 lg:gap-24 items-center py-16 lg:py-0">
      <div class="min-h-[180px] lg:min-h-[547px] lg:min-w-[348px] mt-24">
        <img src="/illustrations/contact-us.svg" class="absolute bottom-0 right-6 lg:-left-40 w-[339px] lg:w-[525px]" alt="">
      </div>
      <div class="flex flex-col gap-8">
        <h2 class="heading-1 text-ultra-light-grey">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h2>
        <div class="paragraph-1 text-ultra-light-grey">
          <ContentSlot :use="$slots.description" />
        </div>
        <div>
          <a href="mailto:contact@keyro.fr">
            <Button class="bg-indigo text-ultra-light-grey paragraph-1">
              Nous contacter
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
