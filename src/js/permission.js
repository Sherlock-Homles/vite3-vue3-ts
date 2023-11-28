import router from "../router";
import store from "../store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getCookie } from "./cookie";
import Layout from "../layout/index.vue";
import ParentView from "../components/ParentView/index.vue";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login", "/register"];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (getCookie()) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      if (store.state.user.menus.length === 0) {
        store
          .dispatch("GetInfo")
          .then((res) => {
            const menuIds = res.data.menuIds;
            store.dispatch("GenerateRoutes", menuIds).then((routes) => {
              filterRoutes(routes);
              routes.forEach((route) => {
                router.addRoute(route);
              });
              next({ ...to, replace: true });
            });
          })
          .catch(() => {
            next();
          });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.fullPath}`);
      NProgress.done();
    }
  }
});
router.afterEach(() => {
  NProgress.done();
});
const filterRoutes = (routes) => {
  const accessRoutes = routes.filter((route) => {
    let modules = import.meta.glob("../views/**/*.vue");
    if (route.component) {
      if (route.component === "ParentView") {
        route.component = ParentView;
      } else if (route.component === "Layout") {
        route.component = Layout;
      } else {
        route.component = modules[`../views/${route.component}.vue`];
      }
    }
    if (route.children && route.children.length) {
      filterRoutes(route.children);
    }
    return true;
  });
  return accessRoutes;
};
