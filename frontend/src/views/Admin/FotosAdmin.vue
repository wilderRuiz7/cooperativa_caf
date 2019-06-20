<template>
<div>
  <v-carousel class="carousel">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
      <v-btn dark  class="boton" v-on="on" flat>Establecer como foto de perfil</v-btn>
      <v-btn dark  class="boton" v-on="on" flat>Eliminar de mis fotos</v-btn>
      </v-carousel-item>
    </v-carousel>
</div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .carousel{
     width 1000px
  }
  .boton{
    margin-top 410px !important
    background-color black
  }
</style>
