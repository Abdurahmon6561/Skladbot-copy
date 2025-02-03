import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import WereHouse from '../pages/Werehouse.vue';
import Fbs from '../pages/Fbs.vue';
import Calendar from '../pages/Calendar.vue';
import Orders from "../pages/Orders.vue";
import Clients from "../pages/Clients.vue";
import Employears from "../pages/Employears.vue";
import Documents from "../pages/Documents.vue";
import Business from "../pages/Business.vue";
import Presentation from "../pages/Presentation.vue";

const routes = [
  { path: '/', component: Main },
  { path: '/werehouse', component: WereHouse },
  { path: '/fbs', component: Fbs },
  { path: '/calendar', component: Calendar },
  { path: '/orders', component: Orders }, 
  { path: '/clients', component: Clients }, 
  { path: '/employears', component: Employears }, 
  { path: '/documents', component: Documents }, 
  { path: '/business', component: Business },
  { path: '/presentation', component: Presentation }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
