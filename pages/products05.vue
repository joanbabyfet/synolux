<template>
<div id="mainRegion">
    <Sidebar />
    <div id="bodyMain">
        <div id="bodyMainTop"></div>
        <div id="innerBodyMain">
            <h1>產品介紹</h1>
            <div id="subMenu">
                <div id="innerSubMenu">
                    <div id="pagePath"><nuxt-link to="/">首頁</nuxt-link><span class="side2">&nbsp;</span>產品介紹</div>
                </div>
            </div>
            <div id="mainContents">
                <h2>其他</h2>
                <p>相關太陽能電池燒結爐設備零件耗材，貴金屬回收服務與LED藍寶石基板等材料。更多詳細細節請來電。</p>
                <p>&nbsp;</p>
            </div>
        </div>
        <div id="bodyMainFooter"></div>
    </div>
    <div id="mainFooterSide"></div>
</div>
</template>

<script>
export default {
  head() {
    return {
      // title: '',
      // link: [   //引入样式
      // ],
      // script: [ //引入js
      // ]
    }
  },
}
</script>

<style scoped>

</style>