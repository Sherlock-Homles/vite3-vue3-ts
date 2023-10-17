<script setup lang="ts">
import { useRouter } from 'vue-router'
const text = 'welcome home!'
const router = useRouter()
const toLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="buttonBox">
    <el-button type="primary" plain @click="toLogin">登 录</el-button>
    <el-button type="primary" plain>注 册</el-button>
  </div>
  <div>{{ text }}</div>
  <div>提交测试</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
