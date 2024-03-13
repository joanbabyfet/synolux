<template>
    <h1>{{ $t('news.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><NuxtLink :to="localePath('/')">{{ $t('backHome') }}</NuxtLink><span class="side2">&nbsp;</span>
                <NuxtLink :to="localePath('/news')">{{ $t('news.title') }}</NuxtLink><span class="side2">&nbsp;</span>詳細內容
            </div>
        </div>
    </div>
    <div id="mainContents">
        <h2>{{ info?.data.name }}</h2>
        {{ info?.data.content }}
        <div class="files">
            <ul>
                <li class="iconPDF"></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
//获取配置
const config = useRuntimeConfig()
const route = useRoute()
//console.log(route.params)
const info = ref(null)
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about

onMounted(() => {
    //console.log('onMounted')
    getNewsInfo()
})

//获取新闻详情
const getNewsInfo = async () => {
    await nextTick() //防止刷新页面时获取不到数据
    const { data, error } = await useFetch('/v1/example/show', {
        baseURL: config.public.BASE_URL,
        method: 'GET',
        params: {
            params: `{"id": ${route.params.id}}`
        },
    })
    if (error.value) {
        throw showError({ statusCode: 404, statusMessage: 'Page Not Found' })
        //以下方式不会跳转到错误页 error.vue
        //throw createError({statusCode: 404, statusMessage: "Page not found.", fatal: true})
    }
    info.value = data.value
}
</script>