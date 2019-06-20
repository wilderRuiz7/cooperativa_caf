<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
            <h1 class="text-xs-center black--text display-2">CONOCE NUESTRAS NOTICIAS<br><strong>NUEVAS RUTINAS</strong></h1>
        </v-flex>
        </v-layout>
</v-container>
<v-container fluid>
      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon5">
                             <v-card class="caja" dark flat>
        <h1 class="text-xs black--text title font-italic"><strong>CONOCE LOS BENEFICIOS DE NUESTRAS CLASES GRUPALES</strong></h1><br>
        <span class="text-xs black--text subheading">Las personas que realizan actividad física en clases grupales pueden reducir hasta en un 26% los niveles de estrés, es por eso que en el gimnasio Chon´s Gym podrás descargar toda tu energía en nuestras múltiples opciones en clases grupales. Te enseñamos los beneficios que traen para ti. Conoce las clases más populares para que no dudes un segundo en apuntarte en la siguiente nota.</span><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/actividad-fisica-cliente" >Ver más</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 >
      <img class="retrato" src="../../assets/rutina.jpg" alt="">
        </v-flex>
    <v-flex xs12 sm6 md2>
    </v-flex>
       </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon6">
      <img class="retrato" src="../../assets/rutina-2.jpg" alt="">

        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon7">
      <img class="retrato" src="../../assets/rutina-4.jpg" alt="">
        </v-flex>
    <v-flex xs12 sm6 md2>
    </v-flex>
       </v-layout>
         <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon6">
               <v-card class="informacion" dark flat>
        <h1 class="text-xs black--text title font-italic"><strong>¿QUÉ CONOCER SOBRE LA CERTIFICACIÓN SPINNING H.I.I.T.?</strong></h1><br>
        <span class="text-xs black--text subheading">Si eres un apasionado por las clases grupales y además quieres que tengan beneficios para ti, te contaremos todo sobre la certificación H.I.I.T, y no dudarás en apuntarte a las clases con nuestro entrenador, el cual cuenta con esta certificación que te ayudará a quemar grasa mucho más rápido que saliendo a correr o pedalear. Conoce más en la siguiente nota.</span><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/hiit-cliente" >Ver nota</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon7">
               <v-card class="informacion" dark flat>
        <h1 class="text-xs black--text headline font-italic"><strong>RUTINAS DE EJERCICIOS PARA AUMENTAR MASA MUSCULAR.</strong></h1><br>
        <span class="text-xs black--text subheading">Estas son las rutinas o sesión de entrenamiento que debes practciar en el gimnasio para aumentar tu masa muscular, mejorar tu condición física y tonificar tu cuerpo.</span><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/masa-muscular-cliente" >Ver nota</v-btn>
          </v-card>
        </v-flex>
    <v-flex xs12 sm6 md2>
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
   img.retrato{
    height 350px
    width 400px !important
    border-top-right-radius 10%
    border-bottom-left-radius 10%
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
   .cajon5   {
      padding 50px 40px 50px 0px
      margin 10px
  }
   .cajon6    {
      margin 0px 10px 0px 0px
  }
     .cajon7     {
      margin 0px 0px 0px 10px
      margin-top 100px !important
  }
    .caja{
    background-color transparent !important
  }
  .informacion{
     background-color transparent !important
  }
</style>
