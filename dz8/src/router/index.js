import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import BlogPage from '@/views/BlogPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import BlogDetailPage from '@/views/BlogDetailPage.vue'
import ProjectDetailPage from '@/views/ProjectDetailPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectPage
  },
  {
    path: '/projectDetail',
    name: 'ProjectDetail',
    component: ProjectDetailPage
  },
  {
    path: '/blogDetail',
    name: 'BlogDetail',
    component: BlogDetailPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
