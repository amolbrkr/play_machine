<template>
<div v-if="vidObj" id="vid-details">
  <p id="vid-title">
    <h4>{{ vidObj.items[0].snippet.title }}</h4>
  </p>
  <div v-if="errors && errors.length">
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
