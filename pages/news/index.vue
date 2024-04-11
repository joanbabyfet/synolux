<template>
    <h1>{{ $t('news.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><NuxtLink :to="localePath('/')">{{ $t('backHome') }}</NuxtLink><span class="side2">&nbsp;</span>{{ $t('news.title') }}</div>
        </div>
    </div>
    <div class="newsList">
        <ul>
            <li v-for="item in list" :key="item.id">
                <NuxtLink :to="localePath(`/news/${item.id}`)">{{ item.title }}</NuxtLink>
            </li>
        </ul>
        <!-- <p>目前無最新訊息...</p> -->
    </div>
    <div class="pageNumber">
        <UPagination @click="click" v-model="currentPage" :page-count="pageSize" :total="total" />
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about

//頁面使用組合函数
const { list, total, currentPage, pageSize, click } = useNews()
</script>