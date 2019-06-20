<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
            <h1 class="text-xs-center black--text display-2">CONOCE NUESTRAS NOTICIAS<br><strong>MENTE Y EQUILIBRIO</strong></h1>
        </v-flex>
        </v-layout>
</v-container>
<v-container fluid>
      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon5">
                             <v-card class="caja" dark flat>
        <h1 class="text-xs black--text title font-italic"><strong>PUNTOS CLAVES PARA MOTIVARTE A ENTRENAR</strong></h1><br>
        <span class="text-xs black--text subheading">Comenzar a ir al gimnasio y dejar a un lado esos meses de sedentarismo es duro al principio, pero con motivación y con ganas se creara un hábito de ir. Muchas personas lo logran y después no ir un día al gimnasio es sentirse incompleto. La música es un gran motivador a entrenar y tener una rutina de ejercicios. Conoce algunas canciones y tendencias en música para motivarte en la siguiente nota.</span><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/motivarte-cliente" >Ver más</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 >
      <img class="retrato" src="../../assets/motivarte.jpg" alt="">
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
      <img class="retrato" src="../../assets/motivarte-2.jpg" alt="">

        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon7">
      <img class="retrato" src="../../assets/motivarte-3.jpg" alt="">
        </v-flex>
    <v-flex xs12 sm6 md2>
    </v-flex>
       </v-layout>
         <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon6">
               <v-card class="informacion" dark flat>
        <h1 class="text-xs black--text title font-italic"><strong>ALCANZA UNA VIDA SALUDABLE CON LA AYUDA DE UN ENTRENADOR PERSONAL</strong></h1><br>
        <span class="text-xs black--text subheading">El entrenamiento personalizado es un servicio que la mayoría de gimnasios ofrecen, el acompañamiento que te ofrece un experto en entrenamiento físico, rutinas y alimentación serán pieza clave para que alcances tus objetivos y tengas una vida saludable. Conoce el paso a paso para tener una vida más saludable con esta ayuda extra en la siguiente nota.</span><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/vida-saludable-cliente" >Ver nota</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon7">
               <v-card class="informacion" dark flat>
        <h1 class="text-xs black--text headline font-italic"><strong>CLASES DE PILATES EN CHON'S GYM</strong></h1><br>
        <span class="text-xs black--text subheading">Desde principios del siglo XX, la rutina o mteodo Pilates han sido el sistema de entrenamiento personalizado para mente y cuerpo de mayor popularidad entre mujeres y hombres. Con este método se busca la mejora de la flexibilidad y la fuerza de todos los músculos, sin incrementar drásticamente su volumen, como si ocurre en el alzamiento de pesas.</span><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/pilates-cliente" >Ver nota</v-btn>
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
