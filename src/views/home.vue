<template>
  <div class="about">
    <img class="top-theme" alt="Vue logo" src="@/assets/home/1.png">
    <swiper @subevent="onTestClick" :url="m3" :num="a" ></swiper>
<!--    <router-link to="/detail">detail</router-link>-->
<!--    <router-view/>-->
  </div>
</template>

<script>

import Swiper from '@/components/Swiper'
import m3 from '@/assets/home/2.png'
import { ref } from 'vue'

import store from '@/store/index'

const a = ref(1)
export default {
  name: 'Home',
  components: {
    Swiper
  },
  setup (props, context) {
    function onTestClick (event) {
      // context.emit('changView', {
      //   name:'Detail',
      //   params:{
      //     id:3
      //   }
      // })
      //
      // console.log(event)
      //alert(store.state.url)
      store.commit('changeView', {
        routerParams:{
          name:'Detail',
          params:{
           id:3
          }
        }
      })
      console.log(store.state.routerParams)
    }

    return {
      m3,
      a,
      onTestClick
    }
  }
}
</script>

<style>

.top-theme {
  width: 100%;
}
</style>
