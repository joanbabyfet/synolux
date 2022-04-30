<template>
  <div id="mainIdx">
    <div id="idxMain">
      <div id="innerIndMain">
        <div class="newsA">
          <p style="margin-top:56px; margin-bottom:0px; text-align:justify;">Synolux-Corp興溢公司為專業性質的設備代理商，主要代理歐、美、日等國設備儀器，跨足太陽能、半導體科技產業製程設備以及傳統製造產業設備。 </p>
          <div class="more">
            <nuxt-link to="/about"><img src="styles/synolux/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></nuxt-link>
          </div>
        </div>
        <div class="newsB">
          <ul>
            <li v-for="item in links" :key="item.id">
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="newsC">
          <ul>
            <li v-for="item in examples" :key="item.id"><nuxt-link :to="`/example/${item.id}`">{{ item.title }}</nuxt-link></li>
          </ul>
          <!-- <div class="more">
            <nuxt-link to="/news"><img src="styles/synolux/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></nuxt-link>
          </div> -->
        </div>
        <div id="idxMainSide">
        </div>
      </div>
    </div>
    <div id="mainFooterSideIdx"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  layout: 'home', //用首页父模板
  head() {
    return {
      // title: '',
      // link: [   //引入样式
      // ],
      // script: [ //引入js
      // ]
    }
  },
  data() {
      return  {
      }
  },
  async asyncData() {
      try {
          //多个请求批量处理
          let base_api_url = process.env.BASE_API
          const [links, examples]  = await Promise.all([
            axios.get('/link', {baseURL: base_api_url}),
            axios.get('/example', {baseURL: base_api_url}),
          ])
          return {
              links: links.data.data.data,
              examples: examples.data.data.data,
          }
      } 
      catch(err) {
          console.log(err)
      }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
