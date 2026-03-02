<template>
  <el-card class="article-card">
    <div class="card-header">
      <router-link :to="`/article/${article.id}`">
        <h3>{{ article.title }}</h3>
      </router-link>
    </div>
    <div class="card-meta">
      <span>{{ article.category || '未分类' }}</span>
      <span>{{ article.createTime }}</span>
    </div>
    <div class="card-content">
      <p>{{ article.content.slice(0, 100) }}...</p>
    </div>
    <div class="card-actions">
      <router-link :to="`/edit/${article.id}`">
        <el-button type="primary" size="small">编辑</el-button>
      </router-link>
      <el-button type="danger" size="small" @click="handleDelete">删除</el-button>
    </div>
  </el-card>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useBlogStore } from '../stores/blogStore'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const blogStore = useBlogStore()

const handleDelete = () => {
  blogStore.removeArticle(props.article.id)
  ElMessage.success('文章删除成功！')
  blogStore.fetchArticles()
}
</script>

<style scoped>
.article-card {
  margin-bottom: 20px;
}

.card-header h3 {
  font-size: 18px;
  margin: 0;
}

.card-header a {
  color: #333;
  text-decoration: none;
}

.card-header a:hover {
  color: #1989fa;
}

.card-meta {
  margin: 10px 0;
  font-size: 12px;
  color: #999;
  display: flex;
  gap: 20px;
}

.card-content {
  color: #666;
  line-height: 1.6;
}

.card-actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}
</style>