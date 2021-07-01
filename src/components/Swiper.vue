<template>
  <img  @click="onClick" class="img"  :src=url>
</template>

<script>
const p = 1

export default {
  name: 'Swiper',
  props: {
    url: {
      type: String
    },
    num: {
      type: Number
    }

  },
  setup (s, context) {
    function onClick () {
      context.emit('subevent', p)
    }
    return {
      onClick
    }
  }

}

</script>

<style scoped>
.img{
  width: 100%;
}
</style>
