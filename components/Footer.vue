<template>
    <div id="footerIdx">
        <div id="innerFooter">
            <div class="infos">興溢股份有限公司  版權所有 <br />30272 新竹縣竹北市嘉豐南路二段76號4F-5 TEL:03-5508340 FAX:03-5507443</div>
            <div class="infosRight">
                <div class="nav">
                    <NuxtLink :to="localePath('/about')" activeClass="current">{{ $t('nav.about') }}</NuxtLink><span class="side">&nbsp;</span>
                    <NuxtLink :to="localePath('/news')" activeClass="current">{{ $t('nav.news') }}</NuxtLink><span class="side">&nbsp;</span>
                    <NuxtLink :to="localePath('/products')" activeClass="current">{{ $t('nav.products') }}</NuxtLink><span class="side">&nbsp;</span>
                    <NuxtLink :to="localePath('/service')" activeClass="current">{{ $t('nav.service') }}</NuxtLink><span class="side">&nbsp;</span>
                    <NuxtLink :to="localePath('/contact')" activeClass="current">{{ $t('nav.contact') }}</NuxtLink>
                </div>
                <div class="copyright">Copyright © 2011   Synolux Corp. All Rights Reserved.</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
</script>