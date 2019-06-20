<template>
<div>
    <p></p>
<v-container fluid>
    <p></p>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
        <h1 class="text-xs-center black--text display-1 font-italic"><strong>PUNTOS CLAVES PARA MOTIVARTE A ENTRENAR</strong></h1>
        </v-flex>
      </v-layout>
        </v-container>

           <v-container>
             <v-flex d-flex xs12 sm6 md3>
               </v-flex>
          <v-flex d-flex xs12 sm6 md12>
          <v-card color="white" dark flat>
        <span class="text-xs black--text title justify">Comenzar a ir al gimnasio y dejar a un lado esos meses de sedentarismo es duro al principio, pero con motivación y con ganas se creara un hábito de ir. Muchas personas lo logran y después no ir un día al gimnasio es sentirse incompleto. La música es un gran motivador a entrenar y tener una rutina de ejercicios. Conoce algunas canciones y tendencias en música para motivarte en la siguiente nota.</span>
            <p></p><br>
        <span class="text-xs black--text title justify">Tratar de encaminarse hacia el mundo saludable no es sencillo para muchos, sobre todo hacer diariamente una rutina de ejercicios luego de pasar meses en el sedentarismo; sin embargo, en Hard Body queremos y podemos ayudarte a que este proceso sea mucho más divertido y motivacional para ti, ¿quieres saber cómo?</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Queremos que tomes en cuenta que para tener constancia en nuestros gimnasios en Bogotá hace falta mucho más que fuerza de voluntad, nos referimos a que sostener la disciplina será la mejor técnica a la que puedes aferrarte.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>Un hábito totalmente saludable</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Es lógico, al principio hacer una rutina de ejercicios en un gimnasio será mucho más difícil, pero con el paso del tiempo te sentirás más cómodo e incluso podrías llegar a sentirte incompleto si no asistes. Recuerda que desarrollar un hábito es un proceso individual de cada quien pero se debe empezar por lo más básico: asistir.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>¿La música ayudará a este proceso?</strong></h2>
        <p></p><br>
         <span class="text-xs black--text title justify">Por supuesto que una nueva playlist de música con canciones que tengan ritmos intensos te motivarán a darlo todo ese día en Chon's Gym y por eso tus audífonos no pueden faltar al momento de realizar tus rutinas de gimnasio. Shannon Cook es la experta en tendencias de Spotify –una de las plataformas de música streaming más utilizadas–  expresó que "La música puede ser una gran motivadora para entrenar, siempre y cuando sea la música correcta".</span>
         <p></p><br>
        <span class="text-xs black--text title justify">Entonces, sea para salir a caminar, correr un rato o realizar tu rutina de ejercicios en Hard Body, la música será ese factor que te ayudará a animarte e incluso desafiarte bajo tus propios límites. Por eso no debes tener dudas de que una playlist muy bien armada podría empujarte a entrenar y dar todo.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Te mostraremos una lista de 11 canciones que Spotify considera las más populares a nivel mundial para acompañarte en tus rutinas de entrenamiento:</span>
         <p></p><br>
        <span class="text-xs black--text title justify">Hace muchos Eminem encabeza la lista con Till I Collapse, en segundo lugar se ubica Kanye West con su canción Power, luego podemos encontrar a Drake con Jumpman y God's Plan, seguido de The Chainsmokers con Closer, Rihanna y Calvin Harris con This is what you came for; todavía no puede salir de la lista Work de Rihanna, Sia con Cheap Thrills, The Weekend con Starboy, Cardi B con I Like It y por supuesto, el clásico de Survivor Eye of the Tiger.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>Recuerda que tú darás el primer paso</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Está en tus manos dar el primer paso para el cambio así que recuerda que la mitad del esfuerzo estará cuando asistas al gimnasio, aunque no tengas tantas ganas de entrenar, una vez estando en Hard Body con tu ropa de entrenamiento y viendo a todos realizando ejercicio estamos seguros de que te motivarás.</span>
        <p></p><br>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md3>
          </v-flex>
           </v-container>
           <v-container>
               <v-layout>
          <v-flex d-flex xs12 sm6 md6 class="cuadro">
               <img class="imagen_clave" src="../../assets/motivarte.jpg" alt="">
          </v-flex>
           <v-flex d-flex xs12 sm6 md6 class="cuadro">
               <v-card class="vista" dark flat>
                   <p></p>
        <h2 class="text-xs black--text headline justify"><strong>En Chon's Gym te damos opciones para motivarte</strong></h2>
        <p></p>
        <span class="text-xs black--text title justify">Es recurrente y una de las mejores opciones que puedes tomar para iniciar el compromiso y la disciplina de asistir al gimnasio; nosotros contamos con planes mensuales para que puedas hacer un pago adelantado del disfrute de nuestras instalaciones, clases grupales, zonas húmedas y máquinas de entrenamiento.</span>
        <p></p>
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
    height 500px
    width 700px !important
  }
  img.imagen_clave{
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
  .vista{
      background-color white!important
      padding 0px 20px
  }
  .cuadro{
      margin-top -50px
  }
</style>
