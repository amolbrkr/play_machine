<template>
  <div>
    <app-banner></app-banner>

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
  created() {
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
