import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Index.vue";
import SecretCounter from "../pages/SecretCounter.vue";
import Tutorial from "../pages/Tutorial.vue";
import TutorialLaunching from "../pages/TutorialLaunching.vue";
import Support from "../pages/Support.vue";
import ExampleComponent from "../pages/ExampleComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/secret/counter",
    name: "SecretCounter",
    component: SecretCounter,
  },
  {
    path: "/tutorial",
    name: "Tutorial",
    component: Tutorial,
  },
  {
    path: "/tutorial/launching",
    name: "TutorialLaunching",
    component: TutorialLaunching,
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
  },
  {
    path: "/example-component",
    name: "ExampleComponent",
    component: ExampleComponent
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;
