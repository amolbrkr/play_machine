<template>
  <div id="preview" @click="playVid" v-if="vidInfo">
    <v-card :hover="true" :ripple="true" :tile="true">
      <v-card-media :src="vidInfo.items[0].snippet.thumbnails.medium.url" height="180px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="title">{{ this.vidTitle }}</div>
          <span class="grey--text">By {{ channelInfo.items[0].snippet.title }} </span>
          <br>
          <span>
            <i class="material-icons md-18 align">visibility</i>
            {{ this.countFormatter(vidInfo.items[0].statistics.viewCount) }}
          </span>
          <span>
            <i class="material-icons md-18 align">thumb_up</i>
            {{ this.countFormatter(vidInfo.items[0].statistics.likeCount) }}
          </span>
          <span>
            <i class="material-icons md-18 align">thumb_down</i>
            {{ this.countFormatter(vidInfo.items[0].statistics.dislikeCount) }}
          </span>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>



<script>
export default {
  props: ['vidId'],
  data() {
    return {
      channelInfo: null,
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
    playVid() {
      var _route = "/play/" + this.vidId
      this.$router.push(_route)
    }
  },
  created() {
    this.getCompleteVideoData(this.vidId).then(_data => {
      this.vidInfo = _data.vidInfo.data;
      this.channelInfo = _data.channelData.data;
    })
  }
}

</script>

<style scoped>
.title {
  font-size: 20px !important;
  font-weight: 400;
  line-height: 24px !important;
  letter-spacing: normal !important;
}

span + span {
  margin-left: 12px;
}
</style>
