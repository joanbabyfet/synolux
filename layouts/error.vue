<template>
    <div>
        <h2 v-if="error.statusCode == 404">404 - 页面不存在</h2>
        <h2 v-else>服务器错误</h2>
        <button>
            <nuxt-link to="/">HOME</nuxt-link>
        </button>
    </div>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error_layout', //用该布局,否则会用defalut默认布局
    head() {
        return {
            title: '自定义报错页面',
        // link: [   //引入样式
        // ],
        // script: [ //引入js
        // ]
        }
    }
}
</script>
