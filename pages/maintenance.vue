<template>
    <div class="content">
        <div class="maintenance">
            <h1>Maintenance Mode</h1>
            <h1>admin@admin</h1>
        </div>
    </div>
</template>

<script setup>
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