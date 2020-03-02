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
import EnterInfo from '@/components/EnterInfo'

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
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/dlinks',
      name: 'DirectLinks',
      component: Dlinks
    },
    {
      path: '/userlinks',
      name: 'UserLinks',
      component: UserLinks
    },
    {
      path: '/enterinfo',
      name: 'EnterInfo',
      component: EnterInfo
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
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
                  next({ name: 'userboard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('jwt') == null){
          next()
      }
      else{
          next({ name: 'userboard'})
      }
  }else {
      next() 
  }
})


export default router
