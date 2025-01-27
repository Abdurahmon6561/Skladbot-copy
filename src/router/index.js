import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import WereHouse from '../pages/Werehouse.vue';
import Fbs from '../pages/Fbs.vue';
import Calendar from '../pages/Calendar.vue';
import Orders from "../pages/Orders.vue";

const routes = [
  { path: '/', component: Main },
  { path: '/werehouse', component: WereHouse },
  { path: '/fbs', component: Fbs },
  { path: '/calendar', component: Calendar },
  { path: '/orders', component: Orders }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
