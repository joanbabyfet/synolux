<template>
    <div id="idxMain">
        <div id="innerIndMain">
            <HomeAbout></HomeAbout>
            <HomeLink></HomeLink>
            <HomeNews></HomeNews>
            <div id="idxMainSide"></div>
        </div>
    </div>
    <div id="mainFooterSideIdx"></div>
</template>

<script setup>
definePageMeta({
    layout: 'home'
})
//打印当前环境
const config = useRuntimeConfig()
console.log(config.public.NUXT_ENV)
</script>