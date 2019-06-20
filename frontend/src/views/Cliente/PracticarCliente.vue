<template>
<div>
    <v-container fluid>
        <v-layout row wrap>
                        <v-flex d-flex xs12 sm6 md3>
        </v-flex>
               <v-flex d-flex xs12 sm6 md6>
                   <p></p><br>
          <h1 class="text-xs-center black--text display-2">CONSEJOS<strong> SALUDABLES</strong></h1>
      <p></p>
        </v-flex>
        </v-layout>
                <v-flex d-flex xs12 sm6 md3>
        </v-flex>
    </v-container>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md6>
          <v-card class="tips" dark flat>
            <h1 class="text-xs blue--text headline font-italic"><strong>¿Quién puede practicar las rutinas de Crossfit?</strong></h1>
              <p></p>
                 <span class="text-xs black--text caption justify">Muchas personas se preguntan si las clases de Crossfit son para todo el mundo y es posible que la respuesta sea no. Antes de empezar con este tipo de entrenamiento de alta exigencia es necesario contar con una buena base física. Claro está que, con tiempo, constancia y paciencia, se irá mejorando en esta disciplina y se empezarán a notar cambios de alto impacto.</span><br>
              <p></p>
          <span class="text-xs black--text caption justify">Es por esto que las clases se dividen en niveles para los participantes, los cuales te permite adaptar tu entrenamiento físico básico a los ejercicios Crossfiteros.</span><br>
               <p></p>
          <span class="text-xs black--text caption justify">Además, con una buena técnica y un control corporal, los riesgos de sufrir una lesión son cada día menores. Cada participante debe de ser consciente de sus capacidades y limitaciones para poder trabajarlas y progresar poco a poco.</span><br>

              </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4>
          <v-card color="white" dark flat>
        <img class="imagen_tips" src="../../assets/practicar_crossfit.jpg" alt="">
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
        <v-layout row wrap>
                        <v-flex d-flex xs12 sm6 md1>
        </v-flex>
               <v-flex d-flex xs12 sm6 md10>
                <v-card class="frases" flat>
        <v-btn color="black" class="font-weight-black white--text title" to="planes-cliente">Ver Planes</v-btn>
        <v-btn color="blue darken-4" class="font-weight-black white--text title" to="/horarios-cliente">Ver Horarios</v-btn>
                   </v-card>
        </v-flex>
        </v-layout>
                <v-flex d-flex xs12 sm6 md1>
        </v-flex>
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
 img.imagen_layout{
    height 500px
    width 700px !important
  }
  img.imagen_tips{
    height 300px
    width 400px !important
  }
  li{
    margin 0px 0px 0px 0px
  }
  article{
    margin 0px 0px 0px 60px
  }
  p.mensaje {
    font-size 13px
    margin 0px 0px 0px 440px
    font-family sans-serif
    color rgba(86, 86, 88, 0.877);
  }
  .tips{
      padding 0px 40px 0px 0px
      background-color white!important
  }
  .frases{
    margin-top -30px
  }
</style>
