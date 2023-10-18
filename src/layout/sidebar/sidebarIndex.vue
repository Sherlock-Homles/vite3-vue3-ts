<script lang="ts" setup>
// sidebarItem 项组件
import SideBarItem from "./sidebarItem.vue";
import { useRouter } from "vue-router";
// 拿到路由列表，过滤我们不想要的
const router = useRouter();
const routerList = router.getRoutes().filter((v) => v.meta && v.meta.isShow);
</script>
<template>
  <div class="sidebar">
    <!-- 项目名称及logo -->
    <div class="sidebar-logo flex-center">
      <svg-icon icon-class="logo" />
      <span>MyGo!!!!!</span>
    </div>

    <!-- 导航菜单 -->
    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      :default-active="$route.path"
      text-color="#999"
      :unique-opened="true"
      router
    >
      <!-- 引入子组件 -->
      <SideBarItem :routerList="routerList" />
    </el-menu>

    <!-- active-text-color：当前菜单项被选中时，字体的颜色 -->
    <!-- background-color：这个menu菜单的背景色 -->
    <!-- default-active：	当前激活菜单的 index -->
    <!-- text-color：菜单项字体颜色 -->
    <!-- unique-opened：unique-opened	是否只保持一个子菜单的展开 -->
    <!-- router：是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
  </div>
</template>
<style lang="scss" scoped>
.sidebar {
  height: 100%;
  .sidebar-logo {
    height: 48px;
    background-color: #002140;
    color: #fff;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    font-size: 20px;
  }
  .el-menu {
    height: calc(100% - 48px);
    border-right: 0;
    overflow: auto;
  }
}
</style>
