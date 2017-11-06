<template>
<div v-if="vidInfo">
  <b-card @click="playVid()" :title="vidTitle"
  :sub-title="vidInfo.items[0].snippet.channelTitle" :img-src="vidInfo.items[0].snippet.thumbnails.high.url" img-top >
      <p id="stats" class="card-text">
      <span>
        <i class="fa fa-eye"></i>
        {{ countFormatter(vidInfo.items[0].statistics.viewCount) }}
      </span>
      <span>
        <i class="fa fa-thumbs-o-up"></i>
        {{ countFormatter(vidInfo.items[0].statistics.likeCount) }}
      </span>
      <span>
        <i class="fa fa-thumbs-o-down"></i>
        {{ countFormatter(vidInfo.items[0].statistics.dislikeCount) }}
      </span>
      <span>
        <i class="fa fa-comment-o"></i>
        {{ countFormatter(vidInfo.items[0].statistics.commentCount) }}
      </span>
      </p>
  </b-card>
  <div v-if="errors && errors.length">
    <app-error :err="errors"></app-error>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['vidId'],
  data() {
    return {
      vidInfo: null,
      errors: []
    }
  },
  computed: {
    vidTitle() {
      return this.vidInfo.items[0].snippet.title.substring(0, 29) + '  ...'
    }
  },
  methods: {
    countFormatter(n) {
      if(n > 999 && n < 999999) {
        return (n / 1000).toFixed(0) + 'K'
      } else if(n > 999999) {
        return (n / 1000000).toFixed(1) + 'M'
      } else {
        return n
      }
    },
    playVid() {
      var _route = "/play/" + this.vidId
      this.$router.push(_route)
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
      this.vidInfo = res.data;
    }).catch(e => {
      this.errors.push(e);
    })

  }
}
</script>

<style scoped>
span + span {
  margin-left: 12px;
}
</style>
