<template>
  <div class="content">
    <div class="error">
      <h1>{{ error.statusCode }}</h1>
      <h1>{{ error.message }}</h1>
      <UButton @click="handleError" size="xl">回首頁</UButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const localePath = useLocalePath(); //根据当前语言解析路由 /about to /zh/about
//点回首页会直接跳转到首页
const handleError = () => clearError({ redirect: localePath('/') })
</script>

<style scoped >
body, html {
  height: 100%;
  width: 100%;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1em;
}
.error h1 {
  font-size: 190%;
  color: #fff;
  text-shadow: -2px 2px 3px rgba(0,0,0,0.5);
  color: #d6336c;
}
.error {
  /* width: 200px; */
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  fill: #d6336c;
  text-align: center;
}
.content {
  height: 100%;
  width: 100%;
  background-color: #5471B9;
}
</style>