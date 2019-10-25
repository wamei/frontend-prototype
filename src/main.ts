import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('./views/Home.vue'),
  },
  {
    path: "/user",
    name: "user",
    component: () => import('./views/User.vue'),
    meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import('./views/Login.vue'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  if (from.name === null) {
    try {
      await store.dispatch('context/autoLogin');
    } catch {
      // do nothing
    }
  }
  if (store.state.context.isLogin && to.name == 'login') {
    next({ name: 'home' });
    return;
  } else if (!store.state.context.isLogin && to.meta.requireAuth === true) {
    next({ name: 'login' });
    return;
  }
  next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
