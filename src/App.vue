<template>
  <div id="app">
    <div style='width:100%;'>
      <video :src="currentVideo" controls loop='true' preload width='100%' webkit-playsinline autoplay playsinline></video>
    </div>
    <br>
    <div style='width:100%;'>
      <div class='list-element' v-for="(video,index) in videos" v-bind:video="video" v-bind:index="index" @click="loadVideo(video)">
        <p>{{video}}</p>
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
      this.currentVideo = video
    }
  }
}
</script>
<style>
.list-element {
  outline: 1px solid black;
  padding: 10px;
}
</style>
