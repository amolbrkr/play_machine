<template>
<div>
  <div id="vid-player">
    <youtube :video-id="vidId" @ready="playerReady" @ended="handleVidLooping"
    :player-width="getPlayerWidth"
    :player-height="getPlayerHeight"
    :player-vars="{ autoplay: 0, controls: 1, showinfo: 0, rel: 0 }">
  </youtube>
  </div>
  <div id="toolbar">
    <b-btn :pressed.sync="vidShouldLoop" size="sm" variant="outline-dark"><i class="fa fa-repeat"></i></b-btn>
    <b-btn size="sm" variant="outline-dark"><i class="fa fa-arrow-down"></i></b-btn>
    <b-btn size="sm" variant="outline-dark"><i class="fa fa-info-circle"></i></b-btn>
    <b-btn size="sm" variant="outline-dark"><i class="fa fa-bookmark-o"></i></b-btn>
    <hr>
  </div>
</div>
</template>

<script>
export default {
  name: "vid-player",
  props: ['vidId'],
  data() {
    return {
      ytPlayer: null,
      vidShouldLoop: false,
      showDesc: false
    }
  },
  computed: {
    getPlayerWidth() {
      return window.innerWidth;
    },
    getPlayerHeight() {
      return ((window.innerWidth * 9) / 16).toFixed(0);
    }
  },
  methods: {
    playerReady(p) {
      this.ytPlayer = p;
    },
    handleVidLooping() {
      if (this.vidShouldLoop) {
        this.ytPlayer.seekTo(0);
      }
    }
  }
}
</script>

<style>
#vid-player {
  padding-top: 56px;
}

#toolbar {
  padding: 0 5px;
  text-align: right;
}
</style>
