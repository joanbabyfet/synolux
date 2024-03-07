<template>
    <h1>{{ $t('products.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><NuxtLink :to="localePath('/')">{{ $t('backHome') }}</NuxtLink><span class="side2">&nbsp;</span>{{ $t('products.title') }}</div>
        </div>
    </div>
    <div id="mainContents">
        <h2>其他</h2>
        <p>相關太陽能電池燒結爐設備零件耗材，貴金屬回收服務與LED藍寶石基板等材料。更多詳細細節請來電。</p>
        <p>&nbsp;</p>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
</script>