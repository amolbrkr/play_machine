<template>
  <div>
    <div style="padding-left: 16px;">
      <h2>
        <i class="material-icons">trending_up</i> Trending Top 50
      </h2>
    </div>
    <div id="trend-list" v-if="yt_trends">
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <div v-for="(vid, idx) in yt_trends.items">
            <v-flex xs12>
              <vid-preview :vidId="vid.id"></vid-preview>
            </v-flex>
          </div>
        </v-layout>
      </v-container>

      <div v-if="errors && errors.length">
        <app-error :err="errors"></app-error>
      </div>
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
