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
              <p></p>
            <h1 class="text-xs blue--text display-1 font-italic"><strong>20 minutos de cardio</strong></h1>
              <p></p>
                 <span class="text-xs black--text body-1 justify">Haz cardio para bajar de peso y adelgazar, además fortifica tus huesos y músculos, entre ellos, el corazón, pero no te excedas con los ejercicios, realiza una rutina de ejercicios de 20 minutos en la elíptica, caminadora o haciendo aeróbicos, tres veces a la semana para que tu corazón se fortalezca sin llevarlo al límite.</span><br>
              <p></p>
          <span class="text-xs black--text body-1 justify">Inicia con una práctica de menor tiempo sí eres nuevo en el gimnasio o prográmala una vez por semana en tu rutina para adelgazar mientras tu cuerpo se adapta.</span><br>
              </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4>
          <v-card color="white" dark flat>
        <img class="imagen_tips" src="../../assets/cardio.jpg" alt="">
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
