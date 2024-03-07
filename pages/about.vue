<template>
    <h1>{{ $t('about.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><NuxtLink :to="localePath('/')">{{ $t('backHome') }}</NuxtLink><span class="side2">&nbsp;</span>{{ $t('about.title') }}</div>
        </div>
    </div>
    <div id="mainContents" v-html="$t('about.description')">
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
</script>