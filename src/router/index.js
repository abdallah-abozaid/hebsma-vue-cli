import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/services.vue";
import Works from "../views/works.vue";
import Notes from "../views/notes.vue";
import Call from "../views/call.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services",
    name: "services",
    component:Services
  },
  {
    path: "/works",
    name: "works",
    component:Works
  },
  {
    path: "/notes",
    name: "notes",
    component:Notes
  },
  {
    path: "/call",
    name: "call",
    component:Call
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
