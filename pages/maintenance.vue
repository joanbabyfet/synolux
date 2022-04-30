<template>
    <div class="content">
        <div class="maintenance">
            <h1> Maintenance Mode </h1>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'maintenance', //用该父模板
    mounted() { //已挂载
        //console.log(this.$route.path)
    },
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
body, html {
  height: 100%;
  width: 100%;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1em;
}
.maintenance h1 {
  font-size: 190%;
  color: #fff;
  text-shadow: -2px 2px 3px rgba(0,0,0,0.5);
  color: #d6336c;
  text-align: center;
}
.maintenance {
  /* width: 200px; */
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  fill: #d6336c;
}
.content {
  height: 100%;
  width: 100%;
  background-color: #5471B9;
}
</style>