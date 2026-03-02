import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getArticles, saveArticle, deleteArticle, getArticleById } from '../utils/storage'

export const useBlogStore = defineStore('blog', () => {
  const articles = ref(getArticles())

  // 获取所有文章
  const fetchArticles = () => {
    articles.value = getArticles()
  }

  // 新增/编辑文章
  const addOrUpdateArticle = (article) => {
    articles.value = saveArticle(article)
  }

  // 删除文章
  const removeArticle = (id) => {
    articles.value = deleteArticle(id)
  }

  // 根据id获取文章
  const getArticle = (id) => {
    return getArticleById(id)
  }

  return {
    articles,
    fetchArticles,
    addOrUpdateArticle,
    removeArticle,
    getArticle
  }
})