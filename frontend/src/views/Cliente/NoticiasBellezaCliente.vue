<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
            <h1 class="text-xs-center black--text display-2">CONOCE NUESTRAS <br><strong>NOTICIAS DE BELLEZA</strong></h1>
        </v-flex>
        </v-layout>
</v-container>
<v-container fluid>
      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon5">
                             <v-card class="caja" dark flat>
        <h1 class="text-xs black--text title font-italic"><strong>LA CLAVE PARA PODER PERDER EL PESO QUE GANASTE EN DICIEMBRE</strong></h1><br>
        <article class="text-xs black--text subheading">Cada comienzo de año comenzamos con un peso y figura que no es para nada la ideal, estas son las secuelas que deja el último mes del año anterior. En Hardbody, con nuestros entrenadores, nutricionistas y nuestras instalaciones comenzaremos el año junto a ti de una manera saludable y con unos pasos que debes seguir para recuperar tu peso y hasta mejorarlo. Conoce más en la siguiente nota.</article><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/clave-cliente" >Ver más</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 >
      <img class="retrato" src="../../assets/pasos.jpg" alt="">
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
      <img class="retrato" src="../../assets/abdomen.jpg" alt="">

        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon7">
      <img class="retrato" src="../../assets/miss-universo.jpg" alt="">
        </v-flex>
    <v-flex xs12 sm6 md2>
    </v-flex>
       </v-layout>
         <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon6">
               <v-card class="informacion" dark flat>
        <h1 class="text-xs black--text headline font-italic"><strong>¿CÓMO PERDER GRASA ABDOMINAL? <br> NOSOTROS TE DECIMOS CÓMO LOGRARLO</strong></h1><br>
        <article class="text-xs black--text title">Tonificar el abdomen es algo muy difícil, ya que primero se debe eliminar la grasa extra, Chon's Gym te contará como reducir la grasa abdominal y tener el cuerpo que deseas.</article><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/perder-grasa-cliente" >Ver nota</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon7">
               <v-card class="informacion" dark flat>
        <h1 class="text-xs black--text headline font-italic"><strong>RUTINAS Y HÁBITOS SALUDABLES DE UNA MISS UNIVERSO</strong></h1><br>
        <article class="text-xs black--text subheading">Las rutinas de entrenamiento son solo una parte de los cuidados que una participante a Miss Universo debe tener para estar en forma, los hábitos saludables de alimentación y cuidados también son importantes. Conoce los secretos que 4 Miss Universo practican y atrévete a iniciar tu propia transformación con Chon's Gym, luego de leer la siguiente nota.</article><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/miss-universo-cliente" >Ver nota</v-btn>
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
