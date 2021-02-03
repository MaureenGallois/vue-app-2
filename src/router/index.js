import Vue from "vue";
import VueRouter from "vue-router";
import Bonjour from "../views/Bonjour.vue";
import Animal from "../views/Animal.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Bonjour",
    component: Bonjour
  },
  {
    path: "/animal/:id",
    name: "Animal",
    component: Animal
  }
];

const router = new VueRouter({
  routes
});

export default router;
