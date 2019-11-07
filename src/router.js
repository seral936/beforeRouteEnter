import Vue from 'vue'
import Router from 'vue-router'
import Profil from './views/Profil.vue'
import Login from './views/Login.vue'
import SignIn from './views/SignIn.vue'
import NotFound from './views/NotFound.vue'
import ProfilAdmin from './views/profilAdmin.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '*',
      redirect: '/NotFound'
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/profilAdmin',
      name: 'profilAdmin',
      component: ProfilAdmin
    },

  ]
});