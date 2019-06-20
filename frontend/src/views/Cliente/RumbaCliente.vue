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
        <h1 class="text-xs blue--text display-1 font-italic"><strong>Rumba</strong></h1>
        <p class="text-xs blue--text title"><strong>AEROBICOS</strong></p>
        <span class="text-xs black--text caption justify">El programa de rumba es una clase de baile, donde se mezclan diferentes movimientos basados  en  diferentes ritmos tales como merengue, salsa, reggaetón, folclor caribeño, bachata, zamba,  entre otros; a la vez que crea un sistema de ejercitación dinámica, emocionante, estimulante y efectiva desde el inicio de la clase que es  una explosión de energía, en donde se entrega todo el esfuerzo sin darse cuenta de ello, y con la consecuencia  de querer realizar la clase todos los días. </span><br>
<p></p><br>
<h1 class="text-xs black--text body-1"><strong>BENEFICIOS</strong></h1>
<p></p>
<li class="text-xs black--text body-1">Quema de calorías<br></li>
<li class="text-xs black--text body-1">Mejora la coordinación<br></li>
<li class="text-xs black--text body-1">Entrenamiento de cuerpo completo<br></li>
<li class="text-xs black--text body-1">Ayuda a perder grasa<br></li>
<p></p><br>
<v-btn color="blue darken-4" class="font-weight-black white--text title" to="/horarios-cliente">Ver Horarios</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md6>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md12 offset-xs1>
      <h1 class="text-xs-center black--text display-1">CLASE<strong> GRUPAL</strong></h1>
      <p></p>
        <img class="imagen_clases" src="../../assets/rumba.jpg" alt="">
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
