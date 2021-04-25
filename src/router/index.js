import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Index.vue";
import Tutorial from "../pages/Tutorial.vue";
import SecretCounter from "../pages/SecretCounter.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tutorial",
    name: "Tutorial",
    component: Tutorial,
  },
  {
    path: "/secret-counter",
    name: "SecretCounter",
    component: SecretCounter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;