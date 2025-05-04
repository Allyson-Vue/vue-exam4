//Make sure to import your views into the router index

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pets from '../views/PetList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ //"routes:" are the routes to different vue pages
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Pets',
      name: 'Pets',
      component: Pets,
    },
  ],
})

export default router
