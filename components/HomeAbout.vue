<template>
    <div class="newsA">
        <p style="margin-top:56px; margin-bottom:0px; text-align:justify;">
            Synolux-Corp興溢公司為專業性質的設備代理商，主要代理歐、美、日等國設備儀器，跨足太陽能、半導體科技產業製程設備以及傳統製造產業設備。
        </p>
        <div class="more"><NuxtLink :to="localePath('/about')"><img src="/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></NuxtLink></div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
</script>