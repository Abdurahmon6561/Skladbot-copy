import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Tarif from '../pages/Tarif.vue';
import Fbs from '../pages/Fbs.vue';
import Calendar from '../pages/Calendar.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/tarif', component: Tarif },
  { path: '/fbs', component: Fbs },
  { path: '/calendar', component: Calendar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
