const STORAGE_KEY = 'vue_blog_articles'

// 获取所有文章
export const getArticles = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

// 保存文章（新增/编辑）
export const saveArticle = (article) => {
  const articles = getArticles()
  const index = articles.findIndex(item => item.id === article.id)
  if (index > -1) {
    articles[index] = article
  } else {
    article.id = Date.now().toString()
    article.createTime = new Date().toLocaleString()
    articles.unshift(article)
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
  return articles
}

// 删除文章
export const deleteArticle = (id) => {
  let articles = getArticles()
  articles = articles.filter(item => item.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles))
  return articles
}

// 根据id获取单篇文章
export const getArticleById = (id) => {
  const articles = getArticles()
  return articles.find(item => item.id === id) || null
}