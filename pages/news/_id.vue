<template>
<div id="mainRegion">
    <Sidebar />
    <div id="bodyMain">
        <div id="bodyMainTop"></div>
        <div id="innerBodyMain">
            <h1>最新消息</h1>
            <div id="subMenu">
                <div id="innerSubMenu">
                    <div id="pagePath"><nuxt-link to="/">首頁</nuxt-link><span class="side2">&nbsp;</span>
                    <nuxt-link to="/news">最新消息</nuxt-link><span class="side2">&nbsp;</span>詳細內容
                    </div>
                </div>
            </div>
            <div id="mainContents" v-html="news_info.content">
                <!-- <div class="files">
                    <ul>
                        <li class="iconPDF"><a href="files/news/20101201.pdf" target="_blank">禹臣衛浴酬賓特惠</a></li>
                    </ul>
                </div> -->
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
    // validate({ params }) {
    //     return /^\d+$/.test(params.id) //检测url params是否为数字, 送字符串会报错
    // }
    async asyncData({ params }) {
        try {
            //返回一个响应对象, 里面有个data属性为服务器返回的真实数据
            let base_api_url = process.env.BASE_API
            const { data }  = await axios.get(`/news/detail?id=${params.id}`, {baseURL: base_api_url})
            return {
                news_info: data.data
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