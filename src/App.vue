<template>
  <div id="app">
    <div class='col-xs-9'>
      <video :src="currentVideo" controls loop='true' preload width='100%' webkit-playsinline autoplay playsinline></video>
    </div>
    <div class='col-xs-3'>
      <div class='list-element' v-for="(video,index) in videos" v-bind:video="video" v-bind:index="index" @click="loadVideo(video)">
        <img :src="thumbnailURL(video)" style='width: 100%;'></img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      currentVideo: ''
    }
  },
  computed: {
    videos: function () {
      return this.$store.getters.videos
    }
  },
  methods: {
    loadVideo: function(video) {
      this.currentVideo = './mov/' + video
    },
    thumbnailURL: function(video_url) {
      return './thumbnails/' + video_url.split('.')[0] + '.png'
    }
  },
  mounted () {
    // './mov/IMG_2133.M4V', './mov/pass+24hr.mp4'
    var settings = require('./data/settings.js')
    this.$store.dispatch('GET_VIDEOS')
  }
}
</script>
<style>
#app {
  padding-top: 10px;
  width: 100%;
  display: inline-block;
}
.list-element {
  outline: 1px solid black;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}
video {
  outline: 2px solid green;
}
</style>
