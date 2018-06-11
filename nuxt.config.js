module.exports = {
    /*
    ** Nuxt Modules
    */
    modules: [
      ['~/modules/SimpleModule', { anArray: ['1', '2', '3', '4']}]
    ],
    simpleModuleOptions: {
      'option1': 'option 1 value',
      'option2': 'option 2 value'
    },
    /*
    ** env variable - access via context object 
    */
    env: {
      WS_URL: process.env.WS_URL || 'http://localhost:3000'
    },
    /*
    ** serverMiddleware - called before each http request
    */
    serverMiddleware: ['~/api/logger'],
    /*
    ** plugins
    */
    plugins: [
      { src: '~/plugins/notification.js', ssr: false },
      {src: '~/plugins/axios-proxy.js'}
    ],
    /*
    ** (route) Middleware
    */
    router: {
      middleware: 'app-wide-middleware'
    },
  /*
  ** Headers of the page
  */
  head: {
    title: 'lifecycle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js Lifecycle Hooks' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
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
  }
}
