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
        <h1 class="text-xs blue--text display-1 font-italic"><strong>Shiatsu</strong></h1>
        <p class="text-xs blue--text title"><strong>Aérobicos</strong></p>
        <span class="text-xs black--text caption justify">Es una técnica oriental que se trata de un modo de influir en el estado general que posee una persona, incidiendo tanto en el propio equilibrio de la misma como en el reparto de las energías internas.</span><br>
        <span class="text-xs black--text caption justify">Por todo ello, el principal objetivo de esta técnica es hacer que el receptor armonice con la energía del entorno y de la vida, contribuyendo a normalizar las situaciones energéticas a partir de tres maneras: estabilizando los excesos –o defectos- del qi, reduciendo sus desequilibrios y reparando los bloqueos que existan en su flujo.</span>
<p></p>
<h1 class="text-xs black--text body-1"><strong>BENEFICIOS</strong></h1>
<p></p>
<li class="text-xs black--text body-1">Ayuda a bajar los niveles de stress y tensión corporal<br></li>
<li class="text-xs black--text body-1">Ideal en personas con dolencia a nivel muscular.<br></li>
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
        <img class="imagen_clases" src="../../assets/shiatsu.jpg" alt="">
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
    margin 0px 0px 0px 60pxv
  }
  p.mensaje {
    font-size 13px
    margin -60px 0px 0px 440px
    font-family sans-serif
    color rgba(86, 86, 88, 0.877);
  }
</style>
