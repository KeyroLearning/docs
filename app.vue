<!-- <template>
  <div>
    <NuxtPage />
  </div>
</template>
 -->

<!-- <script setup lang="ts">
const route = useRoute()
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://keyro.fr' + route.path,
    },
  ],
  script: [
    { children: 'window.pipedriveLeadboosterConfig = {base: \'leadbooster-chat.pipedrive.com\',companyId: 7441706,playbookUuid: \'d5bafda1-6bd9-4479-bdc7-7f9b774cdfe8\',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn(\'LeadBooster already exists\');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: \'o\', n: n, h: h });},trigger: function (n) {this.q.push({ t: \'t\', n: n });},};}})();' },
    { src: 'https://leadbooster-chat.pipedrive.com/assets/loader.js', async: true },
  ]
})

useSeoMeta({
  titleTemplate: (titleChunk?: string) => {
    return titleChunk ? titleChunk : 'Keyro'
  }
})
</script> -->

<template>
  <div class="min-h-screen flex flex-col justify-between overflow-hidden">
    <nuxt-page />
    <!-- <layout-footer class="relative" /> -->
    <!-- <cookie-monster /> -->
  </div>
</template>

<style>

:root {
  @apply bg-white text-ultra-dark-blue font-fira
}
</style>
