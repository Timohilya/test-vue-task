import { createRouter, createWebHistory } from 'vue-router'
import List from '../components/views/List/Index.vue'
import Table from '../components/views/Table/Index.vue'

const routes = [
  {
    path: '/',
    redirect: '/list',
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/table',
    name: 'table',
    component: Table,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
