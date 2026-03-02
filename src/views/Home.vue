<template>
  <div class="home-page">
    <el-empty v-if="articles.length === 0" description="暂无文章，快去发布吧！">
      <router-link to="/edit">
        <el-button type="primary">发布第一篇文章</el-button>
      </router-link>
    </el-empty>
    <div v-else class="article-list">
      <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBlogStore } from '../stores/blogStore'
import ArticleCard from '../components/ArticleCard.vue'

const blogStore = useBlogStore()
const articles = blogStore.articles

onMounted(() => {
  blogStore.fetchArticles()
})
</script>

<style scoped>
.home-page {
  padding: 20px 0;
}

.article-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;
}
</style>