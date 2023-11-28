<template>
  <el-container>
    <el-aside>
      <!-- 侧边导航栏 -->
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import SideBar from './sidebar/sidebarIndex.vue'
</script>

<style scoped lang="scss">
.el-container {
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
}
.el-aside {
  width: 10%;
  background-color: #304156;
}
.el-main {
  background-color: #e9eef3;
}
</style>
