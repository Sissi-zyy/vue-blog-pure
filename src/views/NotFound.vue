<template>
  <div class="not-found-page">
    <el-empty description="页面走丢了 😯">
      <router-link to="/">
        <el-button type="primary">返回首页</el-button>
      </router-link>
    </el-empty>
  </div>
</template>

<style scoped>
.not-found-page {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>