<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const toLogin = () => {
  router.push("/login");
};
const logo = "/images/logo/mygo.png";
const title = "迷子でもいい、迷子でも進め。";
</script>

<template>
  <div class="wallpaper">
    <div class="loginBox">
      <el-row>
        <el-col :span="24">
          <el-image :src="logo" fit="contain" class="logo" />
          <div class="title">{{ title }}</div>
        </el-col>
        <el-col :span="24" class="buttonList">
          <el-button type="primary">注册账号</el-button>
        </el-col>
        <el-col :span="24" class="buttonList">
          <el-button @click="toLogin">登录</el-button>
        </el-col>
        <el-col :span="24">
          <div class="prompt">用其他账号开始</div>
        </el-col>
        <el-col :span="24">
          <el-button
            type="submit"
            class="btn-apple"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="apple"
          >
            通过Apple继续
          </el-button>
          <el-button
            type="submit"
            class="btn-gplus"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="googleplus"
          >
            通过Google继续
          </el-button>
          <el-button
            type="submit"
            class="btn-weibo"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="sina"
          >
            通过微博继续
          </el-button>
          <el-button
            type="submit"
            class="btn-facebook"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="facebook"
          >
            通过Facebook继续
          </el-button>
          <el-button
            type="submit"
            class="btn-x"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="x"
          >
            通过X继续
          </el-button>
        </el-col>
        <el-col>
          <el-divider />
          <div class="bottomTips">
            This site is protected by reCAPTCHA Enterprise and the Google
            <a href="https://policies.google.com/privacy"> Privacy Policy </a>
            and
            <a href="https://policies.google.com/terms"> Terms of Service </a>
            apply.
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
.wallpaper {
  display: flex;
  flex-direction: column;
  background-image: url("../../../public/images/wallpaper/2.png");
  background-size: 100% auto;
  background-attachment: fixed;
  min-width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  .loginBox {
    background: rgba(255, 255, 255, 0.92);
    margin: 2rem;
    padding: 2rem;
    border-radius: 3px;
    text-align: center;
    width: 32vh;
    .logo {
      margin: 0 auto;
      width: 15vh;
    }
    .title {
      color: #757c80;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .buttonList {
      margin: 10px 0;
      :deep() {
        .el-button {
          width: 30vh;
          padding: 20px 0;
          font-weight: bold;
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          border-radius: 22px;
          outline: none;
          text-align: center;
          transition: 0.2s background-color;
        }
      }
    }
    .btn-gplus,
    .btn-facebook,
    .btn-x,
    .btn-weibo,
    .btn-apple {
      width: 40px;
      height: 40px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 24px 24px;
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 20px;
      border-style: none;
      margin-left: 8px;
      font-size: 0;
      color: transparent;
      vertical-align: top;
      transition: 0.2s background-color;
    }
    .btn-apple {
      background-image: url(../../../public/images/icon/icon-apple-black.svg);
    }
    .btn-gplus {
      background-image: url(../../../public/images/icon/icon-google.svg);
    }
    .btn-weibo {
      background-image: url(../../../public/images/icon/icon-weibo.svg);
    }
    .btn-facebook {
      background-image: url(../../../public/images/icon/icon-facebook.svg);
    }
    .btn-x {
      background-image: url(../../../public/images/icon/X_black.png);
    }
    .prompt {
      color: #5c5c5c;
      font-size: 12px;
      margin: 10px 0;
    }
    .bottomTips {
      font-size: 12px;
      text-align: center;
      color: rgba(0, 0, 0, 0.32);
      a {
        text-decoration: none;
        color: #3d7699;
      }
    }
  }
  .footer {
    height: 30px;
    width: 100%;
    background: #464a4d;
    position: absolute;
    bottom: 0px;
  }
}
</style>
