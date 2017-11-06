<template>
  <div>
    <app-banner></app-banner>
    <div v-if="resultIds">
      <div v-for="resId in resultIds.items">
        <vid-preview :vidId="resId.id.videoId"></vid-preview>
      </div>
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
    '$route.params.query'(newQuery, oldQuery) {
      this.$router.push('/search/' + newQuery)
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

<style>
</style>
