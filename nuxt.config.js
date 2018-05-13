module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'deadlock - ARK delegate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'deadlock delegate -- description in progress' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Titillium+Web:400,700,900' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#037cff', height: '4px' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    ['nuxt-sass-resources-loader', '@/assets/css/mixins/_breakpoints.scss']
  ],
  axios: {
    proxyHeaders: false,
    debug: true,
    crossDomain: true
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  css: [
    '@/assets/css/_base.scss'
  ]
}
