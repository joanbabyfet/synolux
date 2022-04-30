import Vue from 'vue'
import svg_icon from '@/components/Svgicon.vue' //svg组件

Vue.component('svg-icon', svg_icon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', true, /\.svg$/)
requireAll(req)