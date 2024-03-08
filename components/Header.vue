<template>
    <div id="top"><NuxtLink :to="localePath('/')"><img class="topLogo" src="/images/spacer.gif" alt="logo" name="idxTopLogo" width="205" height="30" border="0" /></NuxtLink>
        <div class="nav"><NuxtLink :to="localePath('/')">{{ $t('backHome') }}</NuxtLink><span class="side">&nbsp;</span><NuxtLink :to="switchLocalePath('en')">English</NuxtLink><span class="side">&nbsp;</span><NuxtLink :to="switchLocalePath('zh')">中文</NuxtLink></div>
    </div>
    <div id="HeaderNavIdx">
        <div id="innerHeaderNavIdx">
            <ul>
                <li><NuxtLink :to="localePath('/')" activeClass="current">{{ $t('backHome') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/about')" activeClass="current">{{ $t('nav.about') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/news')" activeClass="current">{{ $t('nav.news') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/products')" activeClass="current">{{ $t('nav.products') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/service')" activeClass="current">{{ $t('nav.service') }}</NuxtLink></li>
                <li><NuxtLink :to="localePath('/contact')" activeClass="current">{{ $t('nav.contact') }}</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
const switchLocalePath = useSwitchLocalePath(); //切換語言
</script>