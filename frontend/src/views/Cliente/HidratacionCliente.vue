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
            <h1 class="text-xs blue--text display-1 font-italic"><strong>Hidratación</strong></h1>
              <p></p>
                 <span class="text-xs black--text caption justify">La hidratación, antes, durante y después de las rutinas es importante porque el 70 por ciento de nuestro cuerpo está compuesto por agua, por consiguiente es necesario que exista un balance entre el líquido perdido y el líquido que vamos a injerir mientras realizamos las rutinas de gimnasio.</span><br>
              <p></p>
          <span class="text-xs black--text caption justify">Los beneficios de la hidratación según lo plantea la medicina deportiva son: permitir que la sangre fluya hacia la piel, optimizando el proceso de disipación del calor evitando su excesiva acumulación en nuestro cuerpo; por si fuera poco se tiene en equilibrio el volumen de líquidos y electrolitos.</span><br>
              <p></p>
              <span class="text-xs black--text caption justify">Durante el ejercicio físico se retrasa la fatiga porque provee al cuerpo de oxigeno, así tendrá un rendimiento óptimo en la rutina para adelgazar, previniendo síntomas como calambres o nauseas</span><br>
              </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4>
          <v-card color="white" dark flat>
        <img class="imagen_tips" src="../../assets/hidratacion.jpg" alt="">
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
