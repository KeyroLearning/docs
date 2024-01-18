// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    // 'nuxt-gtag',
    '@nuxthq/studio',
  ],
  // gtag: {
  //   id: 'G-Y1S710L7TT',
  //   initialConsent: false
  // },
  typescript: {
    strict: true
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false'
    }
  },
  content: {
    documentDriven: true,
    markdown: {
      mdc: true
    },
    watch: {
      ws: {
        port: 3002
      }
    }
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      'Fira Sans': [300, 400, 500, 600]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
	site: {
		url: 'https://keyro.fr',
	},
	// sitemap: {
	// 	exclude: ['/mentions-legales'],
	// },
	app: {
		head: {
			link: [
				{
					rel: 'icon',
					href: '/favicon.ico'
				},
				{
					rel: 'apple-touch-icon',
					href: '/apple-touch-icon.png'
				}
			]
		}
	}
})
