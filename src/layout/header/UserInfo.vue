<script setup lang="ts">
const userInfo = {
  userName: '长崎素世',
  useravatar: '../../../public/images/wallpaper/second.png',
}
</script>
<template>
  <div class="user">
    <el-avatar :src="userInfo.useravatar" />
    <div class="userName">{{ userInfo.userName }}</div>
  </div>
</template>

<style scoped lang="scss">
.user {
  text-align: center;
  height: 5vh;
  padding: 10% 0;
  .userName {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
  }
}
</style>
