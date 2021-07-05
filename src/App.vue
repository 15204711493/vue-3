<template>
  <div id="app">
    <router-view @changView="onChangView"/>
    {{store.state.url}}
  </div>
</template>

<script>


import router from '@/router'
import store from '@/store/index'
import {computed,watch} from 'vue'


export default {
  name: 'App',
  components: {
  },
  setup (props, context) {

    const c = computed(()=>store.state.routerParams)
    watch(c, (newVal,oldVal)=>{
      router.push(newVal)
    })


    function onChangView (event) {
      // router.push(event)
    }
    return {
      onChangView,
      store
    }
  }
}
</script>
