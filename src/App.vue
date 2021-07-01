<template>
  <div id="app">
    <router-view @changView="onChangView"/>
    <!--    <home/>-->
  </div>
</template>

<script>

import Home from '@/views/home'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home
  },
  setup () {
    function onChangView () {
      alert()
    }
    return {
      onChangView
    }
  }
}
</script>
