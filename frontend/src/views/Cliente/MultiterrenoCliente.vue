<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
              <p></p><br>
        <h1 class="text-xs blue--text headline font-italic"><strong>Multiterreno</strong></h1>
        <p class="text-xs blue--text title"><strong>Spinning</strong></p>
        <span class="text-xs black--text caption justify">Es una clase donde el objetivo es fortalecer, tonificar y metabolizar grasas ala vez que el alumno adquiere estado físico, dentro de los parámetros se trabaja una intensidad del 60% al 70% de la capacidad física.</span><br>
<p></p>
<h1 class="text-xs black--text body-1"><strong>BENEFICIOS</strong></h1>
<p></p>
<li class="text-xs black--text body-1">Tus resultados en los entrenamientos mejoran notablemente al asumir nuevos retos virtuales.<br></li>
<li class="text-xs black--text body-1">Reduce el estrés y supone un mayor gasto de energía que otros entrenamientos en bici.<br></li>
<p></p>
<v-btn color="blue darken-4" class="font-weight-black white--text title" to="/horarios-cliente">Ver Horarios</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md6>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md12 offset-xs1>
      <h1 class="text-xs-center black--text display-1">CLASE<strong> GRUPAL</strong></h1>
      <p></p>
        <img class="imagen_clases" src="../../assets/multiterreno.jpg" alt="">
        <p></p><br>
        <v-btn color="black" class="font-weight-black white--text title" to="planes-cliente">Ver Planes</v-btn>
        <p></p><br>
        <p class="mensaje">*Horarios sujetos a cambios sin previo aviso</p>
        <p></p>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md4>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
<style lang="stylus" scoped>
 img.imagen_clases{
    height 500px
    width 700px !important
  }
  li{
    margin 0px 0px 0px 0px
  }
  article{
    margin 0px 0px 0px 60px
  }
  p.mensaje {
    font-size 13px
    margin -60px 0px 0px 440px
    font-family sans-serif
    color rgba(86, 86, 88, 0.877);
  }
</style>
