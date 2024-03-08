import { createRouter, createWebHistory } from "vue-router";
import SiteNavigation from "../components/SiteNavigation.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "home",
      component: SiteNavigation
    }
  ]
})

export default router;