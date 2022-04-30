<template>
<div id="mainRegion">
    <Sidebar />
    <div id="bodyMain">
        <div id="bodyMainTop"></div>
        <div id="innerBodyMain">
            <h1>服務項目</h1>
            <div id="subMenu">
                <div id="innerSubMenu">
                    <div id="pagePath"><nuxt-link to="/">首頁</nuxt-link><span class="side2">&nbsp;</span>服務項目</div>
                </div>
            </div>
            <div id="mainContents">
                <ol>
                    <li> 裝機、驗機、試產支援：協助客戶確認機器所需廠務設施與週遭環境；協助機器設備之拆箱、搬運、清點附屬零件等相關技術支援。</li>
                    <li> 保養維修及保固服務：現場技術支援服務，提供生產設備所需的定期保養技術服務，協助客戶建立保養能力，維護合約。</li>
                    <li> 教育訓練：提供客戶設備使用前相關課程、使用後問題剖析、機台相關作業流程等教育訓練。</li>
                    <li> 技術諮詢服務：提供客戶技術諮詢服務及支援。</li>
                    <li> 提供料件備品：提供生產設備相關的料件與備品。</li>
                </ol>
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
