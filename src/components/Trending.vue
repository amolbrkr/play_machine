<template>
<div>
  <app-banner></app-banner>
  <div id="trend-list" v-if="yt_trends">
    <div v-for="(vid, idx) in yt_trends.items">
      <vid-preview :vidId="vid.id"></vid-preview>
    </div>
    <div v-if="errors && errors.length">
      <app-error :err="errors"></app-error>
    </div>
  </div>
  <div v-else>
    <app-loading></app-loading>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'trending',
  data() {
    return {
      yt_trends: null,
      errors: []
    }
  },
  created() {
    axios.get(`https://www.googleapis.com/youtube/v3/videos/`, {
      params: {
        part: 'id',
        chart: 'mostPopular',
        regionCode: 'IN',
        maxResults: '50',
        key: '{API KEY}'
      }
    }).then(res => {
      this.yt_trends = res.data;
    }).catch(e => {
      this.errors.push(e);
    })
  }
}
</script>

<style >
#trend-list {
  padding: 56px 5px 5px 5px;
}
</style>
