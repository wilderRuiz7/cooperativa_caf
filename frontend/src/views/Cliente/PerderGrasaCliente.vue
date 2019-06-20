<template>
<div>
    <p></p>
<v-container fluid>
    <p></p>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
        <h1 class="text-xs-center black--text display-1 font-italic"><strong>¿CÓMO PERDER GRASA ABDOMINAL? NOSOTROS TE DECIMOS CÓMO LOGRARLO</strong></h1>
        </v-flex>
      </v-layout>
        </v-container>

           <v-container>
               <v-layout>
          <v-flex d-flex xs12 sm6 md12>
          <v-card color="white" dark flat>
        <span class="text-xs black--text title justify">Tonificar el abdomen es algo muy difícil, ya que primero se debe eliminar la grasa extra, Chon's Gym te contará como reducir la grasa abdominal y tener el cuerpo que deseas.</span>
        <p></p><br>
          </v-card>
        </v-flex>
        </v-layout>
    </v-container>

           <v-container>
               <v-layout>
                   <v-flex d-flex xs12 sm6 md3>
          </v-flex>
          <v-flex d-flex xs12 sm6 md6 class="cuadro">
              <v-card flat>
               <img class="imagen_clave" src="../../assets/abdomen.jpg" alt="">
               <p></p>
                </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3>
          </v-flex>
               </v-layout>
    </v-container>

    <v-container>
               <v-layout>
           <v-flex d-flex xs12 sm6 md12 class="cuadro">
               <v-card class="vista" dark flat>
                   <p></p><br>
        <span class="text-xs black--text title justify">La grasa abdominal causa desagrado en las personas que quieren estar siempre en forma, quieres eliminarla a lo que dé lugar, pero aunque realices cientos de abdominales al día no ves el cambio, eso es porque hay muchos consejos a tomar en cuenta para que los resultados sean favorables. Estos consejos involucran una buena alimentación y realzar ejercicio como crossfit en Bogotá. Si estás listo para tomar en cuenta estos consejos, no dejes de leernos.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Eliminar la grasa abdominal no es sencillo, pero tampoco imposible de hacer, así que controla lo que comes porque se trata en un 70 por ciento de la alimentación. Y aunque seguramente unas clases de pilates o crossfit en Bogotá te ayudarán a estar en mejor forma, tendrás que seguir estos consejos para tener un abdomen plano.</span>
        <p></p><br>
               </v-card>
          </v-flex>
               </v-layout>
    </v-container>

           <v-container>
               <v-layout>
                   <v-flex d-flex xs12 sm6 md3>
          </v-flex>
          <v-flex d-flex xs12 sm6 md6 class="cuadro">
              <v-card flat>
               <img class="imagen_habitos" src="../../assets/habitos.jpg" alt="">
               <p></p>
               <v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/planes-cliente" >Ver planes</v-btn>
               <p></p><br>
                </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3>
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
  img.imagen_clave{
    height 300px
    width 400px !important
  }
    img.imagen_habitos{
    height 500px
    width 500px !important
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
  .vista{
      background-color white!important
      padding 0px 20px
  }
  .cuadro{
      margin-top -50px
  }
</style>
