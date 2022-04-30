<template>
<div id="mainRegion">
    <Sidebar />
    <div id="bodyMain">
    <div id="bodyMainTop"></div>
    <div id="innerBodyMain">
      <h1>關於我們</h1>
      <div id="subMenu">
        <div id="innerSubMenu">
          <div id="pagePath"><nuxt-link to="/">首頁</nuxt-link><span class="side2">&nbsp;</span>關於我們</div>
        </div>
    </div>
      <div id="mainContents">
        <p>Synolux Corporation 興溢股份有限公司為專業性質的設備代理商，主要代理歐、美、日等國設備及儀器，跨足電子業、太陽能、LED、半導體等科技產業製程與量測設備以及傳統製造產業設備。</p>
        <p> 我們擁有專業及豐富經驗的業務與維護團隊，創新與快速效率的反應，成功拓展市場及達成客戶滿意度！</p>
        <p>          本公司以主動積極、樂觀、負責、創新、滿意的宗旨，秉持服務至上，為我們的客戶提供迅速與優質的服務。</p>
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
