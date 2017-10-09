import Vuex from 'vuex'
import Vue from 'vue'
// var VueResource = require('vue-resource')
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: []
  },
  getters: {
    videos: function (state) {
      return state.videos
    }
  },
  mutations: {
    ADD_VIDEO: function(state, payload) {
      state.videos.push(payload.value)
    }
  },
  actions: {
    GET_VIDEOS: function(context) {
      window.$.get('/videos').then((r)=>{
        console.log(r)
        r.forEach(function(d){
          context.commit('ADD_VIDEO', { value: d })
        })        
      })
    }
  }
})
