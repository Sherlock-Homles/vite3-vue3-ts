// 引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更"轻")
// const app = createApp(App)
// console.log('实例对象',app);
// 挂载
// app.mount('#app')

createApp(App).mount("#app");
