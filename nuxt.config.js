export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Тестовое задание Selectel',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Тестовое задание Selectel'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    'vue-slider-component/theme/antd.css',
    './assets/scss/main.scss'
  ],
  styleResources: {
    scss: [
      './assets/scss/helpers/variables.scss',
      './assets/scss/helpers/mixins.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/async-methods'},
    {src: '~/plugins/vue-slider-components', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-svg-loader', {
      svgo: {
        plugins: [
          { prefixIds: true },
        ],
      },
    }],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
