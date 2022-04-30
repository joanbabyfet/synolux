import env from './env' //导入环境配置文件

const path = require('path')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '興溢股份有限公司 - 太陽能燒結爐設備、自動焊接機、表面輪廓階高量測儀、3D光學輪廓高度量測儀、新竹',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      //引入样式
      { rel: 'stylesheet', href: '/styles/synolux/style.css' },
    ],
    script: [
      //引入js
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/main', //定义全局函数与变量
    '@/plugins/icons',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module' //关闭eslint检查,避免开发不规范报错
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      console.log(__dirname)
      svgRule.exclude = [path.resolve(__dirname, 'assets/svg')]
      // Includes /icons/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'assets/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
        },
      }) 
    }
  },
  //环境配置 process.env获取通过cross-env设置的环境变量
  env: {
    BASE_API: env[process.env.NODE_ENV].BASE_API, //接口地址
    NODE_ENV: env[process.env.NODE_ENV].NODE_ENV  //当前环境
  },
  router: {
    middleware: ['maintenance'], //所有访问路由要通过以下中间件
  },
  loading: true, //是否启用自带加载进度条, 默认true
  axios: {
    proxy: false, //是否启用反向代理
  },
  proxy: {
    // '/': {
    //   target:'http://api.sienergy.local', //当拦截到该子目录后转发到该域名请求
    //   changeOrigin:true
    // }
  },
}
