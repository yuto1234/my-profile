import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/views/Profile.vue'
import Skill from '@/views/Skill.vue'
import Portfolio from '@/views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Profile
    },
    {
      path: '/skill',
      component: Skill,
    },
    {
      path: '/portfolio',
      component: Portfolio,
    },
  ]
})
