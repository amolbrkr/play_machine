<template>
<div>
  <div v-if="resultIds">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <div v-for="resId in resultIds.items">
          <v-flex xs12>
            <vid-preview :vidId="resId.id.videoId"></vid-preview>
          </v-flex>
        </div>
      </v-layout>
    </v-container>
  </div>
  <div v-if="errors.length">
    <app-error :err="errors"></app-error>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      resultIds: null,
      errors: []
    }
  },
  watch: {
    '$route.params.query' (newQuery, oldQuery) {
      this.$router.push({
        path: '/search/' + newQuery
      })
    }
  },
  mounted() {
    axios.get(`https://www.googleapis.com/youtube/v3/search/`, {
      params: {
        part: 'id',
        q: this.$route.params.query,
        order: 'relevance',
        maxResults: '50',
        key: '{API KEY}'
      }
    }).then(res => {
      this.resultIds = res.data;
    }).catch(e => {
      this.errors.push(e);
    })
  }
}
</script>
