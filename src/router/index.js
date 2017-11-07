import Vue from 'vue'
import Router from 'vue-router'
import Trending from '@/components/Trending'
import PlayVid from '@/components/PlayVid'
import SearchResults from '@/components/SearchResults'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/search/:query',
      name: 'SearchResults',
      component: SearchResults
    }
  ]
})
