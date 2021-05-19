import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "homeLayout" */ "../layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "/updates",
        name: "Updates",
        component: () =>
          import(/* webpackChunkName: "updates" */ "../views/Updates.vue"),
      },
      {
        path: "/tutorials",
        name: "Tutorials",
        component: () =>
          import(/* webpackChunkName: "tutorials" */ "../views/Tutorials.vue"),
      },
      {
        path: "/tutorial/launching",
        name: "TutorialLaunching",
        component: () =>
          import(
            /* webpackChunkName: "tutorialLaunching" */ "../views/TutorialLaunching.vue"
          ),
      },
      {
        path: "/support",
        name: "Support",
        component: () =>
          import(/* webpackChunkName: "support" */ "../views/Support.vue"),
      },
      {
        path: "/secret/boxes",
        name: "SecretBoxes",
        component: () =>
          import(
            /* webpackChunkName: "secretBoxes" */ "../views/SecretBoxes.vue"
          ),
      },
      {
        path: "/secret/counter",
        name: "SecretCounter",
        component: () =>
          import(
            /* webpackChunkName: "secretCounter" */ "../views/SecretCounter.vue"
          ),
      },
    ],
  },
  {
    component: () =>
      import(/* webpackChunkName: "docsLayout" */ "../layouts/Docs.vue"),
    children: [
      {
        path: "/docs",
        name: "Docs",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "docs" */ "../views/Docs.vue"),
      },
      {
        path: "/docs/:slug",
        name: "DocsItem",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "docsItem" */ "../views/Docs.vue"),
      },
    ],
  },
  {
    path: "/tutorial/:slug",
    component: () =>
      import(/* webpackChunkName: "articleLayout" */ "../layouts/Article.vue"),
    children: [
      {
        path: "",
        name: "Article",
        component: () =>
          import(/* webpackChunkName: "article" */ "../views/Article.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
