<template>
<div>
    <p></p>
<v-container fluid>
    <p></p>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
        <h1 class="text-xs-center black--text display-1 font-italic"><strong>CLASES DE PILATES EN CHON'S GYM</strong></h1>
        </v-flex>
      </v-layout>
        </v-container>

           <v-container>
               <v-layout>
          <v-flex d-flex xs12 sm6 md12>
          <v-card color="white" dark flat>
        <span class="text-xs black--text title justify">Desde principios del siglo XX, el metodo Pilates ha sido el sistema de entrenamiento personalizado de clases para mente y cuerpo de mayor popularidad entre mujeres y hombres.</span>
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
               <img class="imagen_universo" src="../../assets/motivarte-3.jpg" alt="">
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
        <span class="text-xs black--text title justify">Desde principios del siglo XX, la rutina o mteodo Pilates han sido el sistema de entrenamiento personalizado para mente y cuerpo de mayor popularidad entre mujeres y hombres. Con este método se busca la mejora de la flexibilidad y la fuerza de todos los músculos, sin incrementar drásticamente su volumen, como si ocurre en el alzamiento de pesas.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">El alemán Joseph Hubertus Pilates, combinó su conocimiento en distintas especialidades como la gimnasia, la traumatología, el ballet y el yoga, con trabajos en el control mental, la respiración y la relajación, para crear rutinas de ejercicio físico especializadas, ideales para la reducción de los niveles de grasa corporal y la definición del cuerpo.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>Ventajas y beneficios.</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Las clases de Pilates apuntan a estabilizar tus músculos centrales, haciendo énfasis en el control de la respiración y la alineación de la columna, como ejes de cada rutina. Son altamente recomendados para diversas terapias de rehabilitación, ya que su práctica se hace de manera lenta y pausada, siempre bajo un control estricto de cada movimiento.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">No existe limitante en cuanto a edades o niveles de capacidad física para desarrollar esta rutina de ejercicios, esto se debe a que el metodo  Pilates ayudan al cuerpo y permiten eliminar malos hábitos posturales, lo que te brindará amplios beneficios contra los dolores de espalda, hombros y caderas.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Por otro lado, las clases de Pilates en San Gil oxigenan y mejorar la flexibilidad de los diferentes músculos que se trabajen, así como la movilidad de las articulaciones superiores e inferiores. Además, este sistema proporciona mayor coordinación y equilibrio, gracias a su trabajo focalizado en relajar tu cuerpo y mente.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Los Pilates también promueven el descanso mental, a través del control de la respiración y la realización de ejercicios que influyen directamente en la disminución de los niveles de estrés y las enfermedades relacionadas a este.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">En Chon's Gym, contamos con una variedad de horarios para el desarrollo de estas rutinas, por lo que te invitamos a consultar las clases en nuestro portal Web o en las programaciones de nuestra sede.</span>
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
               <img class="imagen_habitos" src="../../assets/pilates.gif" alt="">
               <p></p><br>
               <v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/planes-cliente" >Ver Planes</v-btn>
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
  img.imagen_universo{
    height 400px
    width 600px !important
  }
    img.imagen_habitos{
    height 500px
    width 500px !important
  }
   img.imagen_valle{
    height 600px
    width 600px !important
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
