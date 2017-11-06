import Vue from 'vue'
import Router from 'vue-router'
import Trending from '@/components/Trending'
import PlayVid from '@/components/PlayVid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Trending',
      component: Trending
    },
    {
      path: '/play/:videoId',
      name: 'PlayVid',
      component: PlayVid
    }
  ]
})
