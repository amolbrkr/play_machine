<template>
  <div>
    <vid-player :vidId="this.$route.params.videoId"></vid-player>
    <vid-details :vidId="this.$route.params.videoId"></vid-details>
  </div>
</template>

<script>
import VidPlayer from './VidPlayer';
import VidDetails from './VidDetails';

export default {
  //Local registration for VidPlayer and VidDetails components
  components: {
    'vid-player': VidPlayer,
    'vid-details': VidDetails
  }
}
</script>
