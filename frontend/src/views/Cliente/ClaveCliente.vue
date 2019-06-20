<template>
<div>
    <p></p>
<v-container fluid>
    <p></p>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
        <h1 class="text-xs-center black--text display-1 font-italic"><strong>LA CLAVE PARA PODER PERDER EL PESO QUE GANASTE EN DICIEMBRE</strong></h1>
        </v-flex>
      </v-layout>
        </v-container>

           <v-container>
             <v-flex d-flex xs12 sm6 md3>
               </v-flex>
          <v-flex d-flex xs12 sm6 md12>
          <v-card color="white" dark flat>
        <span class="text-xs black--text title justify">Cada comienzo de año comenzamos con un peso y figura que no es para nada la ideal, estas son las secuelas que deja el último mes del año anterior. En Chon's Gym, con nuestros entrenadores, nutricionistas y nuestras instalaciones comenzaremos el año junto a ti de una manera saludable y con unos pasos que debes seguir para recuperar tu peso y hasta mejorarlo. Conoce más en la siguiente nota.</span>
            <p></p><br>
        <span class="text-xs black--text title justify">Sí, es cierto... diciembre es un mes muy divertido en el que no se miden las cantidades de comidas dañinas que ingieres todos los días; sin embargo, enero es el mes donde se pasa la factura de las malas decisiones tomadas en último mes del 2018. Un plan de entrenamiento físico es esencial para recuperar la forma que tenías antes o incluso, una mucho mejor ¿te animas?</span>
        <p></p><br>
        <span class="text-xs black--text title justify">¿Trabajar más seguido con una rutina para bajar de peso fue tu propósito para este Año Nuevo? Entonces presta atención para alcanzar tu meta de tener un estilo más saludable con la ayuda de los entrenadores y profesionales de Chon's Gym.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>La clave está en el ejercicio cardiovascular</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Para poder deshacerte de ese peso de más ganado el mes pasado necesitas rutinas de gimnasio efectivas, por eso es más aconsejable realizar ejercicios en movimiento o rutinas de cardio que permitan que tu corazón bombee mayor cantidad de sangre y así se puedan gastar las calorías acumuladas en tu cuerpo.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Alguna de las opciones más recomendadas para agregar en tu  plan de entrenamiento físico es salir a correr o usar la caminadora manteniendo un ritmo constante, usar la bicicleta y asistir a clases de spinning, hacer saltos de cuerda, entre otros; son algunos de las tantas opciones para quemar mayor cantidad de calorías.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>¿Cómo podrás controlar todo tu plan de entrenamiento físico?</strong></h2>
        <p></p><br>
         <span class="text-xs black--text title justify">Una de las principales razones para asistir a nuestros gimnasios en San Gil es: la motivación. Realizando ejercicio en tu casa tienes mayor tendencia a abandonar tu meta de este nuevo año. Sin embargo, con la compañía de nuestros entrenadores, profesionales y demás personas que conocerás en Hard Body contarás con la motivación diaria que necesitas.</span><br>
        <span class="text-xs black--text title justify">Además de la motivación que necesitarás diariamente para cumplir con tener un estilo de vida más saludable, otros de los beneficios de ser parte de la familia Chon's Gym es contar con una rutina de ejercicios totalmente personalizada según tu estado de salud actual. De esta manera podrás ser una persona mucho más saludable.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>La dieta si es un esfuerzo necesario que deberás cumplir</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Para poder complementar un estilo de vida donde la salud es primordial para ti y a eso sumarle terminar con el peso ganado en las navidades, deberás sumarle a tu plan de entrenamiento físico una dieta saludable en el que deberás acostumbrar a tu cuerpo a las comidas más sanas y en cantidades que te hagan bien, olvídate del exceso.</span>
        <p></p><br>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md3>
          </v-flex>
           </v-container>
           <v-container>
               <v-layout>
          <v-flex d-flex xs12 sm6 md6 class="cuadro">
               <img class="imagen_clave" src="../../assets/pasos.jpg" alt="">
          </v-flex>
           <v-flex d-flex xs12 sm6 md6 class="cuadro">
               <v-card class="vista" dark flat>
        <h2 class="text-xs black--text headline justify"><strong>La clave está en el ejercicio cardiovascular</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Para poder deshacerte de ese peso de más ganado el mes pasado necesitas rutinas de gimnasio efectivas, por eso es más aconsejable realizar ejercicios en movimiento o rutinas de cardio que permitan que tu corazón bombee mayor cantidad de sangre y así se puedan gastar las calorías acumuladas en tu cuerpo.</span>
        <p></p><br>
        <v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/planes-cliente" >Ver planes</v-btn>
        <p></p><br>
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
    height: 500px
    width: 700px !important
  }
  img.imagen_clave{
    height: 300px
    width: 400px !important
  }
  li{
    margin: 0px 0px 0px 0px
  }
  article{
    margin: 0px 0px 0px 60px
  }
  p.mensaje {
    font-size: 13px
    margin: 0px 0px 0px 440px
    font-family: sans-serif
    color: rgba(86, 86, 88, 0.877);
  }
  .vista{
      background-color: white!important
      padding: 0px 20px
  }
  .cuadro{
      margin-top: -50px
  }
</style>
