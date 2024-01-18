<template>
  <client-only>
    <div class="fixed transition-all md:bottom-6 md:rounded-lg bottom-32 bg-primary max-w-[450px] p-8 text-ultra-light-grey gap-6 flex flex-col" :class="{ '-left-[450px]': !show, 'left-0 md:left-6': show }">
      <div class="heading-2">
        Cookies
      </div>
      <div class="paragraph-1">
        Nous pouvons les placer pour analyser les données de nos visiteurs, améliorer notre site Web, afficher un contenu personnalisé et vous faire vivre une expérience inoubliable. Pour plus d'informations sur les cookies que nous utilisons, découvrez notre politique de protection des données de nos utilisateurs.
      </div>
      <div class="flex gap-4">
        <Button class="bg-primary text-ultra-light-grey paragraph-1" @click="() => accept(false)">
          Ne pas autoriser
        </Button>
        <Button class="bg-indigo text-ultra-light-grey paragraph-1" @click="() => accept(true)">
          Autoriser
        </Button>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts" setup>

const store = useLocalStorage<Boolean | null>('accept-cookie', null)
const show = computed(() => store.value === null)
const accept = (value: Boolean) => {
  store.value = value
}

// const { grantConsent, revokeConsent } = useGtag()
// const fb_script  = computed(() => store.value ? [
//     { children: "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1437679056819425'); fbq('track', 'PageView');" },
//   ] : [])
// const tb_noscript = computed(() => store.value ? [
//     {
//       children: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1437679056819425&ev=PageView&noscript=1"; />'
//     }
//   ] : [])
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  // script: fb_script,
  // noscript: tb_noscript,
})

watch(store, (value) => {
  if (value) {
    // grantConsent()
  } else {
    // revokeConsent()
  }
}, {
  immediate: true
});

</script>
