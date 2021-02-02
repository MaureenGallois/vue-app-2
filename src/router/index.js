import Vue from "vue";
import VueRouter from "vue-router";
import Bonjour from "../views/Bonjour.vue";
import Personne from "../views/Personne.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Bonjour",
    component: Bonjour
  },
  {
    path: "/personne",
    name: "Personne",
    component: Personne
  }
];

const router = new VueRouter({
  routes
});

export default router;
