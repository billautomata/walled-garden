import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: ['./mov/IMG_2133.M4V', './mov/pass+24hr.mp4']
  },
  getters: {
    videos: function (state) {
      return state.videos
    }
  }
})
