<template>
  <div class="w-full flex items-center ">
    <nav class="container mx-auto flex gap-6 my-auto justify-between flex-wrap">
      <router-link to="/" class="w-30 text-secondary relative z-10">
        <img :src="logo" width="146" height="44" alt="keyro">
      </router-link>
      <div class="hidden xl:flex gap-12 items-center">
        <ul class="flex gap-12 items-center justify-end flex-wrap leading-[17px] font-medium" :class="color">
          <li>
            <button type="button" class="flex gap-2 relative hover-underline-animation" @click="() => dropdown = !dropdown">
              Fonctionnalités
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="color"
              >
                <path d="M2.10989 5.39L1.38989 6.11L7.63989 12.36L7.99989 12.703L8.35989 12.3595L14.6099 6.1095L13.8899 5.3895L7.99989 11.282L2.10989 5.39Z" fill="currentColor" />
              </svg>
            </button>
            <div v-if="dropdown" ref="target" class="z-10 absolute bg-white rounded-lg shadow w-60 top-20">
              <ul class="py-2 text-indigo">
                <li v-for="link in features_links" :key="link.title" class="block px-6 py-4">
                  <nuxt-link :to="link.to" :href="link.href" class="hover-underline-animation">
                    {{ link.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li v-for="link in links" :key="link.title" class="hover-underline-animation">
            <nuxt-link :to="link.to" :href="link.href">
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
        <a href="https://login.keyro.fr" target="_blank">
          <Button class="leading-[17px] font-medium" :class="button_color">
            Connexion
          </Button>
        </a>
      </div>
      <div class="flex xl:hidden items-center relative menu__btn" :class="[menu ? 'menu--open' : 'menu--closed', color]">
        <Button class="!px-2 relative z-10" aria-controls="navbar-default" :aria-expanded="menu" @click="() => menu = !menu">
          <span class="sr-only">Menu</span>
          <div class="menu__btn__picto">
            <div />
          </div>
        </Button>
        <div class="splash absolute top-1/2 left-1/2" :class="button_color" />
      </div>
      <Transition>
        <div v-if="menu" class="top-0 left-0 absolute h-screen w-screen flex flex-col gap-8 justify-center items-center">
          <ul class="flex flex-col gap-8 items-center flex-wrap leading-[17px] font-medium" :class="color">
            <li>
              <button type="button" class="flex gap-2 items-center relative hover-underline-animation heading-3" @click="() => dropdown = !dropdown">
                Fonctionnalités
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  :class="color"
                >
                  <path d="M2.10989 5.39L1.38989 6.11L7.63989 12.36L7.99989 12.703L8.35989 12.3595L14.6099 6.1095L13.8899 5.3895L7.99989 11.282L2.10989 5.39Z" fill="currentColor" />
                </svg>
              </button>
              <div v-if="dropdown" ref="target" class="z-10 absolute bg-white rounded-lg shadow w-60 top-80">
                <ul class="py-2 text-indigo">
                  <li v-for="link in features_links" :key="link.title" class="block px-6 py-4">
                    <nuxt-link :to="link.to" :href="link.href" class="hover-underline-animation">
                      {{ link.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li v-for="link in links" :key="link.title" class="hover-underline-animation">
              <nuxt-link :to="link.to" :href="link.href" class="heading-3">
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
          <a href="https://login.keyro.fr" target="_blank">
            <Button class="leading-[17px] font-medium px-12 py-4" :class="button_color">
              Connexion
            </Button>
          </a>
        </div>
      </Transition>
    </nav>
  </div>
</template>

<script lang="ts" setup>
type Link = { title: string; to?: string; href?: string };
const links: Link[] = [
  { to: '/services', title: 'Services' },
  { to: '/a-propos', title: 'À propos' },
  { to: '/mediatheque', title: 'Médiathèque' },
  { to: '/blog', title: 'Blog' }
]
const features_links: Link[] = [
  { to: '/gestion-administrative', title: 'Gestion administrative' },
  { to: '/digitalisation', title: 'Digitalisation' },
  { to: '/innovation', title: 'Innovation' },
  { to: '/suivi-operationnel', title: 'Suivi opérationnel' }
]

const props = defineProps({
  inverted: {
    type: Boolean,
    default: false
  },
  variant: {
    type: Boolean,
    default: false
  }
})

const color = computed(() => props.inverted ? 'text-ultra-light-grey' : 'text-indigo')
const button_color = computed(() => props.inverted ? 'text-indigo bg-ultra-light-grey' : 'text-ultra-light-grey bg-primary')
const logo = computed(() => props.inverted ? props.variant ? '/logo/keyro-logo-white-variant.svg' : '/logo/keyro-logo-white.svg' : '/logo/keyro-logo-colored.svg')

const dropdown = ref(false)

const target = ref(null)
onClickOutside(target, () => (dropdown.value = false))

const menu = ref(false)
</script>

<style scoped lang="scss">

.splash {
  &::after {
    content:"";
    display:block;
    position:absolute;
    border-radius:50%;
    background-color: currentColor;

    width:284vmax;
    height:284vmax;
    top:-142vmax;
    left:-142vmax;

    transform: scale(0);
    transform-origin:50% 50%;
    transition: transform .5s cubic-bezier(0.755, 0.050, 0.855, 0.060);

    will-change:transform;
  }
}
.menu--open .splash::after {
  transform:scale(1);
}

.menu__btn__picto {
  padding: 10px 6px;
  transition: all 0.7s, font-size 0s;
  transition-timing-function: cubic-bezier(0.68, -0.35, 0.265, 1.35);

  & > div {
    width: 20px;
    height: 2px;
    background-color: currentColor;
    @apply rounded-lg;

    transition: background 0.4s, font-size 0s;
    transition: all 0.1s 0.3s, font-size 0s;

    &::before,
    &::after {
      transition: font-size 0s;
      content: "";
      display: block;
      position: absolute;
      width: 20px;
      height: 2px;
      background-color: currentColor;
      @apply rounded-lg;
      transition: font-size 0s;
      transform-origin: center center;
      transition: all 0.3s 0.2s, font-size 0s;
    }
    &::before {
      margin-top: -6px;
    }
    &::after {
      margin-top: 6px;
    }
  }
}

.menu--open .menu__btn__picto {
  transform: rotate(180deg);
  > div::before {
    transform: rotate(45deg) translate(3px, 5.5px);
  }
  > div {
    background: transparent;
  }
  > div::after {
    transform: rotate(-45deg) translate(3px, -5.5px);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity .5s cubic-bezier(0.755, 0.050, 0.855, 0.060);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
