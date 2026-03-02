<template>
  <div class="edit-page">
    <el-card>
      <el-form :model="form" label-width="80px" class="edit-form">
        <el-form-item label="文章标题" required>
          <el-input v-model="form.title" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item label="文章分类" required>
          <el-input v-model="form.category" placeholder="请输入文章分类（如：前端、生活）" />
        </el-form-item>
        <el-form-item label="文章内容" required>
          <el-input
            v-model="form.content"
            type="textarea"
            :rows="20"
            placeholder="支持Markdown语法，例如：## 二级标题、```js 代码块 ```"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave" size="large">保存文章</el-button>
          <el-button @click="handleCancel" size="large">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useBlogStore } from '../stores/blogStore'

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()

// 表单数据
const form = ref({
  id: '',
  title: '',
  category: '',
  content: '',
  createTime: ''
})

// 编辑模式：加载文章数据
onMounted(() => {
  const id = route.params.id
  if (id) {
    const article = blogStore.getArticle(id)
    if (article) {
      form.value = { ...article }
    }
  }
})

// 保存文章
const handleSave = () => {
  if (!form.value.title || !form.value.content) {
    ElMessage.warning('标题和内容不能为空！')
    return
  }
  blogStore.addOrUpdateArticle(form.value)
  ElMessage.success(form.value.id ? '文章编辑成功！' : '文章发布成功！')
  router.push('/')
}

// 取消
const handleCancel = () => {
  router.push('/')
}
</script>

<style scoped>
.edit-page {
  padding: 20px 0;
}

.edit-form {
  max-width: 800px;
  margin: 0 auto;
}

.el-textarea {
  width: 100%;
}
</style>