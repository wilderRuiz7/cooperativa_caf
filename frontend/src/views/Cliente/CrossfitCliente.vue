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
        <h1 class="text-xs blue--text display-1 font-italic"><strong>Crossfit</strong></h1>
        <p class="text-xs blue--text title"><strong>Jaula</strong></p>
        <span class="text-xs black--text caption justify">Es  un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad. Esto significa que nos valemos de una gran cantidad de ejercicios y disciplinas deportivas (gimnasia, halterofilia, carrera…), de entre las cuales seleccionamos técnicas o movimientos aplicables a la vida diaria y los combinamos de muchas formas diferentes en entrenamientos intensos, resultando no solo un experiencia exigente durante la cual el carácter lúdico y la camaradería cobran un papel primordial, sino también un programa insuperable para desarrollar las diez capacidades físicas generales: resistencia cardiovascular, resistencia energética, fuerza, flexibilidad, potencia, velocidad, coordinación, agilidad, equilibrio y precisión.</span><br>
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
        <img class="imagen_clases" src="../../assets/cross-fit.jpg" alt="">
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
