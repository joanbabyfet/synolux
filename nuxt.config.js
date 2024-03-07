// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, //开启服务器端渲染(预渲染)
  devServer: {
    host: 'localhost', //默认为localhost
    port: 3001
  },
  runtimeConfig: {
    public: { // public 下的变量可以在客户端和服务端使用
      BASE_URL: '', //全局api域名
      MAINTENANCE_MODE: false //是否维护中
    },
  },
  app: {
    head: {
      title: '興溢股份有限公司',
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: '太陽能燒結爐設備 自動焊接機 表面輪廓階高量測儀 3D光學輪廓高度量測儀 新竹' },
        { name: 'keywords', content: '太陽能燒結爐設備 自動焊接機 表面輪廓階高量測儀 3D光學輪廓高度量測儀 新竹' },
      ],
      link: [],
      script:[]    
    },
  },
  //全局引入插件
  plugins: [
    { src: '@/plugins/router-nprogress.js', mode: 'client'}
  ],
  //全局引入css文件
  css: [
    '@/assets/style.css',
    //'@/assets/form.css'
  ],
  modules: [
    '@nuxt/ui', '@nuxtjs/i18n'
  ],
  //多语言
  i18n: {
    strategy: 'prefix', //路由是否加上语言前缀 http://localhost:3000/zh/
    langDir: 'locales', //语言包目录
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.js'
      }
    ],
    defaultLocale: 'zh', //默认语言
    detectBrowserLanguage: { //是否自动检查用户浏览器语言
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    compilation: {
      strictMessage: false, //关闭语言包里用html tag报错
    },
  }
})
