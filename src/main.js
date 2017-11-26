// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueYouTubeEmbed from 'vue-youtube-embed'
import axios from 'axios'

import App from './App'
import router from './router'

import 'vuetify/dist/vuetify.min.css'

import Trending from '@/components/Trending'
import AppError from '@/components/AppError'
import Loading from '@/components/Loading'
import VidPreview from '@/components/VidPreview'

Vue.use(Vuetify, {
  theme: {
    primary: '#E91E63',
    secondary: '#757575',
    accent: '#9E9E9E',
    error: '#b71c1c'
  }
})
Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

Vue.component('app-trending', Trending)
Vue.component('app-error', AppError)
Vue.component('app-loading', Loading)
Vue.component('vid-preview', VidPreview)

Vue.mixin({
  methods: {
    countFormatter(n) {
      if (n > 999 && n < 999999) {
        return (n / 1000).toFixed(0) + 'K';
      } else if (n > 999999) {
        return (n / 1000000).toFixed(1) + 'M';
      } else {
        return n;
      }
    },
    getCompleteVideoData(id) {
      return axios.get(`https://www.googleapis.com/youtube/v3/videos/`, {
        params: {
          part: 'snippet, statistics',
          id: id,
          key: '{API KEY}'
        }
      }).then(vidData => {
        //Get info about the Uploader
        return axios.get(`https://www.googleapis.com/youtube/v3/channels/`, {
          params: {
            part: 'snippet, statistics',
            id: vidData.data.items[0].snippet.channelId,
            key: '{API KEY}'
          }
        }).then(chnlData => {
          return {
            'channelData': chnlData,
            'vidInfo': vidData
          };
        }).catch(e => {
          errs.push(e);
        })
      }).catch(e => {
        errs.push(e);
      })
    }
  }
})

//An empty vue instance to work as a communication bus between 2 non parent-child components.
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
