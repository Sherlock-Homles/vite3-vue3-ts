<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
//引入'vue3-puzzle-vcode'插件
import Vcode from "vue3-puzzle-vcode";
const router = useRouter();
const logo = "/images/logo/mygo.png";
const title = "迷子でもいい、迷子でも進め。";
const loginForm = reactive({
  userName: "",
  password: "",
});
//验证码模态框是否出现，默认不展示
const Img = "../../../public/images/wallpaper/first.png";
const isShow = ref(false);
//登录按钮
const login = () => {
  //展现验证码模态框
  isShow.value = true;
};
//用户通过了验证
const success = (msg) => {
  isShow.value = false;
  console.log("验证通过" + msg);
  //通过验证跳转到home首页
  router.push("/admin");
};
//用户点击遮罩层，关闭模态框
const close = () => {
  isShow.value = false;
};
//用户验证失败
const fail = () => {
  console.log("验证失败");
};
</script>

<template>
  <div class="wallpaper">
    <div class="rightTop">
      <el-button type="primary">注册账号</el-button>
    </div>
    <div class="loginBox">
      <el-row>
        <el-col :span="24">
          <el-image :src="logo" fit="contain" class="logo" />
          <div class="title">{{ title }}</div>
        </el-col>
        <el-col :span="24">
          <el-form :model="loginForm" label-width="0">
            <el-form-item label="">
              <el-input
                class="input"
                v-model="loginForm.userName"
                placeholder="邮箱地址或用户ID"
              />
            </el-form-item>
            <el-form-item label="">
              <el-input
                class="input"
                v-model="loginForm.password"
                type="password"
                placeholder="密码"
                show-password
              />
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="24" class="buttonList">
          <el-button
            type="primary"
            :disabled="loginForm.userName === '' || loginForm.password === ''"
            @click="login"
            >登录
          </el-button>
          <!-- 验证码组件 -->
          <Vcode
            :show="isShow"
            @success="success"
            @close="close"
            @fail="fail"
            :imgs="[Img]"
          ></Vcode>
          <a href="https://policies.google.com/privacy"> 不知道密码 </a>
        </el-col>
        <el-col :span="24">
          <el-button
            type="submit"
            class="btn-apple"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="apple"
          >
            <el-image
              src="../../../public/images/icon/icon-apple-black.svg"
              fit="contain"
            />
            通过Apple继续
          </el-button>
          <el-button
            type="submit"
            class="btn-gplus"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="googleplus"
          >
            <el-image
              src="../../../public/images/icon/icon-google.svg"
              fit="contain"
            />
            通过Google继续
          </el-button>
          <el-button
            type="submit"
            class="btn-weibo"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="sina"
          >
            <el-image
              src="../../../public/images/icon/icon-weibo.svg"
              fit="contain"
            />
            通过微博继续
          </el-button>
          <el-button
            type="submit"
            class="btn-facebook"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="facebook"
          >
            <el-image
              src="../../../public/images/icon/icon-facebook.svg"
              fit="contain"
            />
            通过Facebook继续
          </el-button>
          <el-button
            type="submit"
            class="btn-x"
            data-category="signup_page_pc"
            data-action="step1"
            data-label="x"
          >
            <el-image
              class="png"
              src="../../../public/images/icon/X_black.png"
              fit="contain"
            />
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
    <div class="footer">
      <a href="/" target="_blank" rel="noopener" class="logo"> ©mygo!!!!! </a>
    </div>
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
  .rightTop {
    position: absolute;
    top: 10px;
    right: 10px;
    :deep() {
      .el-button {
        width: 15vh;
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
    .input {
      font-size: 14px;
      font-weight: normal;
      line-height: 22px;
      border-radius: 4px;
      height: 40px;
      width: 100%;
      box-sizing: border-box;
      padding: 0px 8px;
      transition: box-shadow 0.2s ease 0s;
      :deep() {
        .el-input__wrapper {
          background-color: #f5f5f5;
          box-shadow: none;
        }
      }
    }
    input:-internal-autofill-selected {
      appearance: menulist-button;
      background-image: none !important;
      background-color: -internal-light-dark(
        rgb(232, 240, 254),
        rgba(70, 90, 126, 0.4)
      ) !important;
      color: fieldtext !important;
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
      a {
        color: #858585;
        font-size: 14px;
        line-height: 22px;
        display: flow-root;
        margin: 20px 0;
      }
    }
    .btn-gplus,
    .btn-facebook,
    .btn-x,
    .btn-weibo,
    .btn-apple {
      margin: 0 0 10px 0;
      width: -webkit-fill-available;
      display: inline-grid;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
      white-space: nowrap;
      color: var(--charcoal-text2);
      background-color: var(--charcoal-surface3);
      font-size: 14px;
      line-height: 22px;
      font-weight: bold;
      padding-right: 24px;
      padding-left: 24px;
      border-radius: 999999px;
      transition:
        color 0.2s ease 0s,
        background-color 0.2s ease 0s,
        box-shadow 0.2s ease 0s;
      height: 40px;
      :deep() {
        .el-image {
          position: absolute;
          left: 24px;
        }
      }
      .png {
        width: 20px;
      }
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
    .logo {
      margin-left: 10px;
      color: #ffffff;
      font-size: 12px;
      line-height: 30px;
      display: flow-root;
    }
  }
}
</style>
