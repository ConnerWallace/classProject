import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import Courses from '@/components/Courses'
import Contacts from '@/components/Contacts'
import Account from '@/components/Account'
import Records from '@/components/Records'
import Dlinks from '@/components/Dlinks'
import UserLinks from '@/components/UserLinks'
import Register from '@/components/Register'
import InfoAdder from '@/components/InfoAdder'
import store from '../store.js'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { 
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { 
        guest: true
      }
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/records',
      name: 'Records',
      component: Records,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/dlinks',
      name: 'DirectLinks',
      component: Dlinks,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/infoAdder',
      name: 'InfoAdder',
      component: InfoAdder,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/userlinks',
      name: 'UserLinks',
      component: UserLinks,
      meta: { 
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.is_admin == 1){
                  next()
              }
              else{
                  next({ name: 'Home'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
          next()
      }
      else{
          next({ name: 'Home'})
      }
  }else {
      next() 
  }
})


export default router
