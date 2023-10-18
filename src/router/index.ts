import type { App } from 'vue'
import ServerRouter from './modules/router'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const publicRoutes: Array<RouteRecordRaw> = [...ServerRouter]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
})

/* 初始化路由表 */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}
/* 导出 setupRouter */
export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
