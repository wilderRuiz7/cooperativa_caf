<template>
<div>
    <p></p>
<v-container fluid>
    <p></p>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
        <h1 class="text-xs-center black--text display-1 font-italic"><strong>TU PLAN DE ENTRENAMIENTO PARA CORRER</strong></h1>
        </v-flex>
      </v-layout>
        </v-container>

           <v-container>
             <v-flex d-flex xs12 sm6 md3>
               </v-flex>
          <v-flex d-flex xs12 sm6 md12>
          <v-card color="white" dark flat>
        <span class="text-xs black--text title justify">Si quieres ser un runner y tener un buen plan de entrenamiento para correr, tienes que tener ganas de hacerlo, es lo más importante, pero además debes proponerte objetivos que de seguro superaras con esfuerzo y dedicación. Trata de alimentarte bien, tener un buen entrenamiento y un calzado adecuado. Conoce más para ser un gran runner en la siguiente nota.</span>
            <p></p><br>
        <span class="text-xs black--text title justify">Las personas que dedican gran parte de su tiempo al running o salir a correr diariamente tienen un plan de entrenamiento físico para cumplir, ya que no solo se trata de establecer una cantidad determinada de kilómetros para recorrer sino que todo también dependerá de los objetivos que quieras alcanzar y la distancia en concreto.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Si quieres iniciar una rutina de ejercicios en la que te dediques a correr, nosotros te ayudaremos con un plan de entrenamiento básico para que puedas lograrlo y aportarle mayor motivación a tus ganas de ejercitarte para inyectarle energía a tu día a día.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>¿Cómo debe empezar tu plan a cumplir?</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Para poder alcanzar grandes metas necesitas de un excelente entrenamiento físico que puedes lograr en Hard Body, estamos seguros de que con el apoyo de nuestros entrenadores personales llegarás en poco tiempo al estado físico que necesitas para iniciar tu objetivo de ser un corredor.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Toma nota al siguiente plan de entrenamiento físico de running para correr las distancias que te propongas:</span>
        <p></p><br>
        <span class="text-xs black--text title justify"><strong>1. Plan de entrenamiento para 5 kilómetros:</strong> empezar por lo más simple siempre será la mejor opción, piensa en los objetivos a corto plazo como hacer un recorrido de 5 kilómetros. Es lo ideal para ti que estás iniciando en el mundo del running, estamos seguros de que en unas semanas podrás ver un progreso ¡la resistencia es la clave!</span><br>
        <p></p><br>
        <span class="text-xs black--text title justify"><strong>2. Plan de entrenamiento para 10 kilómetros:</strong> así como te lo mencionamos antes, para este plan, el objetivo principal está en crear rutinas con resistencia, ¿cómo puedes lograrlo? Lleva un cronómetro con tus tiempos de realización para que así tú mismo puedas romper tus propios récords. Recuerda emplear diferentes series, cambios de ritmos y demás.</span>
        <p></p><br>
        <span class="text-xs black--text title justify"><strong>3. Plan de entrenamiento para 15 kilómetros:</strong> esta es una distancia que muchos consideran como medio fondo, lo recomendable es tener una previa experiencia –con los planes de entrenamiento físico mencionados antes–; sin embargo, también se puede preparar a un principiante para lograrlo. La velocidad aquí es más flexible porque la resistencia es lo primordial.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Para lograr este objetivo podrás hacer una mezcla de diferentes ejercicios para alcanzar la meta, con nuestro entrenamiento personalizado encontraremos la opción ideal para  ti.</span>
        <p></p><br>
        <span class="text-xs black--text title justify"><strong>4. Plan de entrenamiento para media maratón:</strong> uno de los primeros retos que querrás cumplir como amante del running. Esta es una distancia considerable y por eso necesitas de un plan de entrenamiento para lograrlo en un tiempo determinado. Llevar acabo esta rutina para correr la media maratón será muy útil para en un futuro poder lograr una maratón completa.</span>
        <p></p><br>
        <span class="text-xs black--text title justify"><strong>5. Plan de entrenamiento para maratón:</strong> el reto más grande para ti que quieres ser un runner profesional. Para este paso tu entrenamiento debe ser mucho más exigente y tu prioridad son los tiempos de realización. Toma en cuenta que el plan de entrenamiento para poder correr todo un maratón es más exigente y necesita de una dedicación que en Chon´s Gym podrás lograr para conseguir un resultado impecable.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>¡Anímate a ser un runner!</strong></h2>
        <p></p><br>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md3>
          </v-flex>
           </v-container>
           <v-container>
               <v-layout>
          <v-flex d-flex xs12 sm6 md6 class="cuadro">
               <img class="imagen_clave" src="../../assets/bienestar.jpg" alt="">
          </v-flex>
           <v-flex d-flex xs12 sm6 md6 class="cuadro">
               <v-card class="vista" dark flat>
                   <p></p>
        <span class="text-xs black--text subheading justify"><strong>Iniciar en este mundo no te será tan complicado si tienes ganas de hacerlo.</strong> Con una buena alimentación, entrenamiento y calzado, definitivamente podrás más de lo que te propones. Así que deja de lado la cama y pregunta por los planes de entrenamiento en nuestro gimnasio.</span>
        <p></p><br>
        <span class="text-xs black--text subheading justify"><strong>Busca la motivación que te hace falta con nuestros entrenadores personales</strong> para siempre contar con el apoyo de un profesional que te ayude con las técnicas y herramientas necesarias para poder ver resultados en un par de semanas.</span>
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
