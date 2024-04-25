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
        <h2>{{ info.title }}</h2>
        <div v-html="content"></div>
        <div class="files">
            <ul>
                <li class="iconPDF"></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about

//頁面使用組合函数
const { info, content } = useNewsInfo()
</script>