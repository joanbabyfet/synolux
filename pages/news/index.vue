<template>
<div id="mainRegion">
    <Sidebar />
    <div id="bodyMain">
        <div id="bodyMainTop"></div>
        <div id="innerBodyMain">
            <h1>最新消息</h1>
            <div id="subMenu">
                <div id="innerSubMenu">
                    <div id="pagePath"><nuxt-link to="/">首頁</nuxt-link><span class="side2">&nbsp;</span>最新消息</div>
                </div>
            </div>
            <div class="newsList">
                <p v-if="!news.length">目前無最新訊息...</p>
                <ul v-if="news.length">
                    <li v-for="item in news" :key="item.id"><nuxt-link :to="`/news/${item.id}`">{{ item.title }}</nuxt-link> 
                        <img v-if="item.is_hot" src="styles/images/iconNewsHot.gif" width="9" height="9"/>
                    </li>
                </ul>
            </div>
            <div class="pageNumber">
                <ul>
                    <li><a href="#">PAGE 1 OF 12</a></li>
                    <li class="current"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">LIST&gt;&gt;</a></li>
                </ul>
            </div>
        </div>
        <div id="bodyMainFooter"></div>
    </div>
    <div id="mainFooterSide"></div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    async asyncData() {
        try {
            //返回一个响应对象, 里面有个data属性为服务器返回的真实数据
            let base_api_url = process.env.BASE_API
            const { data }  = await axios.get('/news', {baseURL: base_api_url})
            //console.log(data.data.data)
            return {
                news: data.data.data
            }
        } 
        catch(err) {
            console.log(err)
        }
    },
    data() {
        return {

        }
    },
    created() {
        //console.log(this)
    }
}
</script>

<style scoped>

</style>