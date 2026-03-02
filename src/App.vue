<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// 【关键修复】必须导入 NavBar 组件，Vue 才能识别并渲染
import NavBar from './components/NavBar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft Yahei", sans-serif;
  background-color: #f5f7fa;
}

.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}
</style>