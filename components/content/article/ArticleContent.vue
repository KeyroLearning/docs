<script lang="ts" setup>
const url = useRequestURL()

const copyToClipboard = (url: string) => {
    const myTemporaryInputElement = document.createElement('input')
    myTemporaryInputElement.type = 'text'
    myTemporaryInputElement.value = url
    
    document.body.appendChild(myTemporaryInputElement)
    
    myTemporaryInputElement.select()
    document.execCommand('Copy')
    
    document.body.removeChild(myTemporaryInputElement)
}
</script>

<template>
  <section class="px-8 lg:px-10 py-6">
    <article>
      <div class="bg-indigo w-full py-12 lg:py-16 relative rounded-lg max-w-[1600px] min-h-[453px] mx-auto">
        <div class="article mx-auto relative">
          <div class="flex flex-col gap-12 relative">
            <div class="text-ultra-light-grey heading-2">
              <ContentSlot :use="$slots.title" />
            </div>
            <div class="article-image relative h-[180px] lg:h-[130px]">
              <ContentSlot :use="$slots.image" unwrap="p" />
            </div>
            <div class="relative lg:absolute flex lg:flex-col gap-5 lg:-bottom-16 lg:-left-12 justify-center">
              <a target="_blank" :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url.toString())}`" aria-label="partage sur facebook"><img src="/icons/facebook.svg" class="h-6" alt=""></a>
              <a target="_blank" :href="`https://www.linkedin.com/cws/share?url=${encodeURIComponent(url.toString())}`" aria-label="partage sur linkedin"><img src="/icons/linkedin.svg" class="h-6" alt=""></a>
              <a target="_blank" :href="`http://twitter.com/share?url=${encodeURIComponent(url.toString())}`" aria-label="partage sur twitter"><img src="/icons/twitter.svg" class="h-6" alt=""></a>
              <img src="/icons/link.svg" class="h-6 cursor-pointer" alt="" @click="() => copyToClipboard(url.toString())">
            </div>
          </div>
        </div>
      </div>
      <div class="-mx-8 lg:mx-auto mt-12 lg:mt-36 article flex flex-col gap-12">
        <div class="flex flex-col gap-8">
          <ContentSlot :use="$slots.default" />
        </div>
        <hr class="text-indigo">
        <div class="flex gap-6 items-center">
          <div class="h-[80px] w-[80px] rounded-lg bg-light-grey author-image">
            <ContentSlot :use="$slots.author_img" />
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-[12px] leading-[14px] font-medium text-indigo uppercase">
              Écrit par
            </div>
            <div class="text-[20px] leading-[24px] font-normal text-grey">
              <ContentSlot :use="$slots.author" />
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>

.article {
  @apply px-8 lg:px-12 lg:max-w-[860px];
}

.article :deep(p) {
  @apply paragraph-1 text-grey leading-[32px]
}

.article :deep(h2) {
  @apply heading-3 text-primary
}

.article :deep(ol) {
  @apply list-decimal ml-6
}

.article :deep(ul) {
  @apply list-disc ml-6
}

.article-image :deep(img) {
  @apply object-cover -left-12 lg:left-0 min-w-[calc(100vw-32px)] lg:min-w-[100%] h-[200px] lg:h-[359px] lg:w-full absolute rounded-lg
}

.author-image :deep(img) {
  @apply rounded-lg
}

</style>
