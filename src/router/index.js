import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import Dashboard from '../views/Dashboard.vue'
import Vuetify from '../views/Vuetify.vue'
import Quiz from '../views/Quiz.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
      path: '/vuetify',
      name: 'Vuetify',
      component: Vuetify
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    }
  ]
})

export default router