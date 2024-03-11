<template>
    <div class="middle-box text-center animated fadeInDown">
        <h1>503</h1>
        <h3 class="font-bold">系统维护中，请稍后再试。谢谢</h3>

        <div class="error-desc">
            <p>admin@admin </p>
        </div>
    </div>
</template>

<script setup>
//引入样式
import '@/assets/css/style.min.css'
import '@/assets/css/animate.min.css' 

definePageMeta({
    layout: "custom",
});
</script>

<style scoped >
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