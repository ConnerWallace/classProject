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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
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
    }
  ]
})