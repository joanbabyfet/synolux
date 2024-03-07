<template>
    <h1>{{ $t('news.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><NuxtLink :to="localePath('/')">{{ $t('backHome') }}</NuxtLink><span class="side2">&nbsp;</span>{{ $t('news.title') }}</div>
        </div>
    </div>
    <div class="newsList">
        <ul>
            <li v-for="item in news?.data.list" :key="item.id">
                <NuxtLink :to="localePath(`/news/${item.id}`)">{{ item.name }}</NuxtLink>
            </li>
        </ul>
        <!-- <p>目前無最新訊息...</p> -->
    </div>
    <div class="pageNumber">
        <UPagination @click="click" v-model="page" :page-count="10" :total="count" />
    </div>
</template>

<script setup>
//获取配置
const config = useRuntimeConfig()
const page = ref(1)
const news = ref(null)
const count = ref(0)
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about

onMounted(() => {
    //console.log('onMounted')
    getNews()
})

//获取新闻列表
const getNews = async () => {
    await nextTick() //防止刷新页面时获取不到数据
    const { data, error } = await useFetch('/v1/example/index', {
        baseURL: config.public.BASE_URL,
        method: 'GET',
        params: {
            params: `{"page":${page.value},"page_size":10}`
        },
    })
    if (error.value) {
        console.log(error.value)
    }
    if(!data.value) {
        console.log('error')
    }
    else if(data.value.code === 0) {
        console.log(data.value.msg)
        news.value = data.value
        count.value = data.value.data.count
    }
    else {
        console.log(data.value.msg)
    }
}

const click = () => {
    //console.log(page.value)
    getNews()
}
</script>