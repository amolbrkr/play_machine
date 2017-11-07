<template>
<div v-if="vidObj" id="vid-details">
  <p id="vid-title">
    <h4>{{ vidObj.items[0].snippet.title }}</h4>
  </p>
  <b-img rounded="circle" width="50" height="50"
   :src="channelData.items[0].snippet.thumbnails.medium.url" />
   <strong> {{ channelData.items[0].snippet.title }} </strong>
  <div v-if="errors.length">
    <app-error :err="errors"></app-error>
  </div>
</div>
</template>



<script>
import axios from 'axios'

export default {
  name: 'vid-details',
  props: ['vidId'],
  data() {
    return {
      channelData: null,
      vidObj: null,
      errors: []
    }
  },
  created() {
    axios.get(`https://www.googleapis.com/youtube/v3/videos/`, {
      params: {
        part: 'snippet, statistics',
        id: this.vidId,
        key: '{API KEY}'
      }
    }).then(res => {
      this.vidObj = res.data;
      //Get info about the Uploader
      return axios.get(`https://www.googleapis.com/youtube/v3/channels/`, {
        params: {
          part: 'snippet, statistics',
          id: res.data.items[0].snippet.channelId,
          key: '{API KEY}'
        }
      }).then(r => {
        this.channelData = r.data;
      }).catch(e => {
        this.errors.push(e);
      })
    }).catch(e => {
      this.errors.push(e);
    })
  }
}
</script>

<style scoped>
#vid-details {
  padding: 5px;
}
</style>
