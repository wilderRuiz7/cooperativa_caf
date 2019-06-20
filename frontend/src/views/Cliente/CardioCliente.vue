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
        <h1 class="text-xs blue--text display-2 font-italic"><strong>Cardio box</strong></h1>
        <p class="text-xs blue--text title"><strong>Aerobicos</strong></p>
        <span class="text-xs black--text caption justify">Es una actividad energética que le permite tonificar los músculos y mejorar la condición cardiovascular con un método de entrenamiento que combina el trabajo  de kick boxing, step y entrenamiento de fuerza mediante el propio auto carga corporal. Es un método muy eficiente ya que trabaja la psicología del entrenamiento con un sistema que exigente y motivacional.</span><br>
<p></p>
<h1 class="text-xs black--text body-1"><strong>BENEFICIOS</strong></h1>
<p></p>
<li class="text-xs black--text body-1">Es un ejercicio perfecto para la pérdida de peso de manera efectiva.<br></li>
<li class="text-xs black--text body-1">Aumenta la autoestima y la sensación de control.<br></li>
<li class="text-xs black--text body-1">Tonifica prácticamente la totalidad del cuerpo, fortaleciendo multitud de grupos musculares.<br></li>
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
        <img class="imagen_clases" src="../../assets/cardio-box.jpg" alt="">
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
