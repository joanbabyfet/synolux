<template>
    <div id="containerIdx">
        <div id="HeaderIdx">
            <div id="innerHeaderIdx">
                <div id="top">
                    <nuxt-link to="/"><img class="topLogo" src="styles/images/spacer.gif" alt="logo" name="idxTopLogo" width="205" height="30" border="0" /></nuxt-link>
                    <div class="nav">
                        <nuxt-link to="en/">English</nuxt-link><span class="side">&nbsp;</span>
                        <nuxt-link to="#">中文</nuxt-link>
                    </div>
                </div>
                <div id="HeaderNavIdx">
                    <div id="innerHeaderNavIdx">
                        <ul>
                            <li><nuxt-link to="/" exact-active-class="current">首页</nuxt-link></li>
                            <li><nuxt-link to="/about" active-class="current">關於我們</nuxt-link></li>
                            <li><nuxt-link to="/news" active-class="current">最新消息</nuxt-link></li>
                            <li><nuxt-link to="/products" active-class="current">產品介紹</nuxt-link></li>
                            <li><nuxt-link to="/services" active-class="current">服務項目</nuxt-link></li>
                            <li><nuxt-link to="/contact" active-class="current">聯絡我們</nuxt-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <Nuxt />
        
        <Footer />
    </div>
</template>a

<script>
export default {
    
}
</script>

<style scoped>

</style>