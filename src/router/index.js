import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Edit from '../views/Edit.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '我的博客 - 首页' }
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
    meta: { title: '文章详情' }
  },
  {
    path: '/edit/:id?',
    name: 'Edit',
    component: Edit,
    meta: { title: '发布/编辑文章' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404 - 页面不存在' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title || '我的博客'
})

export default router