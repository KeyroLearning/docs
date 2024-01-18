<template>
  <div class="bg-indigo py-24 text-ultra-light-grey">
    <div class="container mx-auto flex flex-col sm:grid sm:grid-cols-4 gap-8">
      <nav class="text-sm flex flex-col gap-8 order-2 sm:order-1 ">
        <div class="font-medium">
          Logiciel
        </div>
        <ul class="flex flex-col gap-3">
          <li v-for="link in features_links" :key="link.title">
            <nuxt-link :to="link.to" :href="link.href" class="hover-underline-animation">
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <nav class="text-sm flex flex-col gap-8 order-3 sm:order-2">
        <div class="font-medium">
          À propos
        </div>
        <ul class="flex flex-col gap-3">
          <li v-for="link in links" :key="link.title">
            <nuxt-link :to="link.to" :href="link.href" class="hover-underline-animation">
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="col-span-2 flex flex-col gap-10 order-1 sm:order-3">
        <router-link to="/" class="w-30 text-secondary">
          <img src="/logo/keyro-logo-white.svg" width="146" height="44" alt="keyro">
        </router-link>
        <!--<div class="flex flex-col gap-4">
          <div class="text-sm font-light">
            Inscris-toi à la newsletter
          </div>
          <div class="flex flex-col lg:flex-row gap-4">
            <input type="text" class="bg-ultra-light-grey text-indigo font-normal rounded w-full p-2.5" placeholder="contact@keyro.fr" required>
            <Button class="bg-primary">
              M'inscrire
            </Button>
          </div>
        </div>-->
      </div>
      <div class="col-span-4 text-sm text-ultra-light-grey text-center font-light mt-10 order-4">
        Copyright ©2023 Keyro - <nuxt-link to="/mentions-legales" class="hover-underline-animation">
          Mentions légales
        </nuxt-link> - <nuxt-link to="/mentions-legales#protection-des-droits-de-linternaute" class="hover-underline-animation">
          Politique RGPD
        </nuxt-link> - Illustrations par getillustrations.com
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Link = { title: string; to?: string; href?: string };
const links: Link[] = [
  { to: '/a-propos', title: 'À propos' },
  { to: '/blog', title: 'Blog' }
]
const features_links: Link[] = [
  { to: '/gestion-administrative', title: 'Gestion administrative' },
  { to: '/digitalisation', title: 'Digitalisation' },
  { to: '/innovation', title: 'Innovation pédagogique' },
  { to: '/suivi-operationnel', title: 'Suivi opérationnel' },
  { to: '/services', title: 'Services' },
  { to: '/mediatheque', title: 'Médiathèque' }
]
</script>

<style scoped>

</style>
