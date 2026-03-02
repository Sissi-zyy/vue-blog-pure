<template>
  <div class="article-page" v-if="article">
    <el-card>
      <div class="article-title">
        <h2>{{ article.title }}</h2>
      </div>
      <div class="article-meta">
        <span>分类：{{ article.category || '未分类' }}</span>
        <span>发布时间：{{ article.createTime }}</span>
      </div>
      <div class="article-content" v-html="renderMarkdown(article.content)"></div>
      <div class="article-actions">
        <router-link :to="`/edit/${article.id}`">
          <el-button type="primary">编辑文章</el-button>
        </router-link>
        <router-link to="/">
          <el-button>返回首页</el-button>
        </router-link>
      </div>
    </el-card>
  </div>
  <el-empty v-else description="文章不存在或已删除！"></el-empty>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '../stores/blogStore'
// 【关键修复】marked 改为命名导入（适配新版本）
import { marked } from 'marked'
import hljs from 'highlight.js'

// 配置marked代码高亮
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  }
})

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()
const article = ref(null)

// 渲染Markdown
const renderMarkdown = (content) => {
  return marked.parse(content)
}

// 获取文章详情
onMounted(() => {
  const id = route.params.id
  const data = blogStore.getArticle(id)
  if (!data) {
    router.push('/404')
  } else {
    article.value = data
  }
})
</script>

<style scoped>
.article-page {
  padding: 20px 0;
}

.article-title h2 {
  font-size: 24px;
  text-align: center;
  margin: 20px auto 20px;
}

.article-meta {
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.article-content {
  line-height: 1.8;
  font-size: 16px;
  padding: 20px 0;
}

.article-content pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 10px 0;
}

.article-content code {
  font-family: Consolas, monospace;
}

.article-actions {
  margin-top: 30px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>