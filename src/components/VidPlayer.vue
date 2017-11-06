<template>
  <div id="vid-player">
      <b-embed type="iframe" aspect="16by9"
      :src = "vidSrc"
      allowfullscreen></b-embed>
  </div>
</template>

<script>
export default {
  name: "vid-player",
  props: ['vidId'],
  computed: {
      vidSrc() {
          return "https://www.youtube.com/embed/" + this.vidId;
      }
  }
}
</script>

<style>
#vid-player {
    padding-top: 56px;
}
</style>
