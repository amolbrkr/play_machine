<template>
<div id="preview" @click="playVid" v-if="vidInfo">
  <b-img :src="vidInfo.items[0].snippet.thumbnails.high.url" fluid-grow alt="video thumbnail" />
  <h4><span>{{ vidTitle }}</span></h4>
  <h5>
    <i class="fa fa-user-o"></i>
    {{ vidInfo.items[0].snippet.channelTitle }}
  </h5>
  <p id="stats">
    <span>
        <i class="fa fa-eye"></i>
        {{ countFormatter(vidInfo.items[0].statistics.viewCount) }}
        VIEWS
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
  <hr>
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
      return this.vidInfo.items[0].snippet.title.substring(0, 29) + '...'
    }
  },
  methods: {
    countFormatter(n) {
      if (n > 999 && n < 999999) {
        return (n / 1000).toFixed(0) + 'K'
      } else if (n > 999999) {
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
h4 {
  color: black;
  padding: 2px 0;
  margin-bottom: 2px;
}
#stats{
  color: #4d4d4d;
  font-size: 11;
}
#preview {
  padding: 2px;
}
span+span {
  margin-left: 12px;
}
</style>
