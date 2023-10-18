import AppLayout from '@/layout/AppLayout.vue'
export default [
  {
    path: '/',
    name: 'homeIndex',
    component: () => import('@/views/home/homeIndex.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/login',
    name: 'loginIndex',
    component: () => import('@/views/login/loginIndex.vue'),
    meta: {
      title: '登录页',
    },
  },
  {
    path: '/layout',
    name: 'layoutIndex',
    component: AppLayout,
    children: [
      {
        path: '/admin',
        name: 'adminIndex',
        component: () => import('@/views/admin/adminIndex.vue'),
        meta: {
          isShow: true, // 控制当前项是否在菜单栏中渲染出来，比如你写了 login 页面的路由，但是并不希望 login在menu菜单中渲染出来，即可设为false
          title: '后台', // menu菜单项的名称，没啥好说的
          icon: 'menu-home', // menu菜单项的图标，我此处是与封装好的 svg 组件结合使用的
        },
      },
      {
        path: '/adminFirst',
        name: 'adminFirst',
        component: () => import('@/views/admin/adminFirst.vue'),
        meta: {
          isShow: true,
          title: '后台一',
          icon: 'menu-home',
        },
      },
    ],
  },
]
