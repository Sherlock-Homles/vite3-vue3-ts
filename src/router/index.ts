import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/homeIndex.vue'
import Login from '@/views/login/loginIndex.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'login', path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHashHistory(), //路由模式
  routes: routes,
})

// 导航守卫
export default router
