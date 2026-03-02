<template>
  <el-header style="background-color: #fff; border-bottom: 1px solid #e6e6e6;">
    <div class="nav-container">
      <el-row justify="space-between" align="middle">
        <el-col>
          <h1 class="logo">我的个人博客</h1>
        </el-col>
        <el-col>
          <el-menu :default-active="activePath" mode="horizontal" background-color="transparent">
            <el-menu-item index="/">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="/edit">
              <router-link to="/edit">发布文章</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activePath = computed(() => route.path)
</script>

<style scoped>
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
}

.logo {
  font-size: 20px;
  color: #1989fa;
  line-height: 60px;
  margin: 0;
}

.el-menu {
  line-height: 60px;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  color: #1989fa;
}
</style>