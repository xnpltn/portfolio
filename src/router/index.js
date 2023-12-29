import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import Blog from '@/views/BlogView.vue';
import ArticleView from '@/views/ArticleView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/me',
      name: 'me',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'rojects',
      component: ProjectsView
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:id',
      name: 'articles',
      component: ArticleView
    },
    
  ]
})

export default router;
