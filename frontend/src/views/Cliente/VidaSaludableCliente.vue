<template>
<div>
    <p></p>
<v-container fluid>
    <p></p>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
        <h1 class="text-xs-center black--text display-1 font-italic"><strong>ALCANZA UNA VIDA SALUDABLE CON LA AYUDA DE UN ENTRENADOR PERSONAL</strong></h1>
        </v-flex>
      </v-layout>
        </v-container>

           <v-container>
               <v-layout>
          <v-flex d-flex xs12 sm6 md12>
          <v-card color="white" dark flat>
        <span class="text-xs black--text title justify">El entrenamiento personalizado es un servicio que la mayoría de gimnasios ofrecen, el acompañamiento que te ofrece un experto en entrenamiento físico, rutinas y alimentación serán pieza clave para que alcances tus objetivos y tengas una vida saludable. Conoce el paso a paso para tener una vida más saludable con esta ayuda extra en la siguiente nota.</span>
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
               <img class="imagen_universo" src="../../assets/motivarte-2.jpg" alt="">
               <p></p>
                </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3>
          </v-flex>v
               </v-layout>
    </v-container>

    <v-container>
               <v-layout>
           <v-flex d-flex xs12 sm6 md12 class="cuadro">
               <v-card class="vista" dark flat>
                   <p></p><br>
       <h2 class="text-xs black--text headline justify"><strong>Evita el sobrepeso sobre todas las cosas</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">La mejor manera de evitar llegar a tener sobrepeso es contar con un entrenador personal que guíe tu camino hacia las mejores rutinas de entrenamiento. Ponlas en práctica y podrás evitar todo esto:</span>
        <p></p><br>
        <li class="text-xs black--text title justify">Enfermedades cardiovasculares, trastornos osteoarticulares como osteoartritis, diabetes o enfermedades degenerativas de las articulaciones.</li><br>
        <li class="text-xs black--text title justify">Podrías presentar alteraciones biomecánicas, esto quiere decir que si no realizas rutinas para  mantenerte activo se verán perjudicadas los mecanismos que te permitan moverte y desplazarse.</li><br>
        <li class="text-xs black--text title justify">El soportar más peso tu cuerpo se verá perjudicado en la columna lumbar, rodillas, caderas y tobillos.</li><br>
                    <p></p><br>
       <h2 class="text-xs black--text headline justify"><strong>¿Cómo puedes aliviar o recuperarte?</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Definitivamente la persona con más conocimiento y que te ayudará con rutinas de gimnasio para recuperar el peso ideal en tu cuerpo es un entrenador personal de Hard Body. Son ellos quienes cuentan con los estudios para saber qué será lo mejor para ti, quienes en conjunto con nuestros nutricionistas verás cada vez más cerca ese cuerpo saludable que solías tener.</span>
        <p></p><br>
        <span class="text-xs black--text title justify">En algunos de los casos, recuperarte de estas lesiones graves que causan el sobrepeso incluye fisioterapia para disminuir el dolor y la inflamación que tienes en tu cuerpo. No dejes que se deteriore tu calidad de vida y la funcionalidad de tu cuerpo. Inscríbete en Chon's Gym y comienza desde ya.</span>
        <p></p><br>
        <h2 class="text-xs black--text headline justify"><strong>Si la nutrición es adecuada podrás alcanzar tu propósito</strong></h2>
        <p></p><br>
        <span class="text-xs black--text title justify">Una buena dieta no se trata únicamente de comer varias veces al día, una buena nutrición es la que garantizará que tus funciones vitales funcionen perfectamente. Al hacer una combinación de una excelente nutrición con un entrenamiento funcional podrá comenzar a tener una vida mucho más sana ¡este es un reto personal para usted mismo!</span>
        <p></p><br>
        <span class="text-xs black--text title justify">Algunos de los micronutrientes básicos que te recomendarán los nutricionistas y tu propio entrenador personal son:</span>
        <p></p><br>
          <li class="text-xs black--text title justify"><strong>Vitamina A:</strong> frutas y vegetales amarillos o anaranjados, vegetales de hojas verdes, hígado y láctenos</li><br>
          <li class="text-xs black--text title justify"><strong>Vitamina B6:</strong> carnes magras, pescado, pollo, ciruelas pasas, bananos y aguacates.</li><br>
          <li class="text-xs black--text title justify"><strong>Hierro:</strong> carnes rojas, pescado, mariscos, aves, yemas de huevo, frutas deshidratadas.</li><br>
          <li class="text-xs black--text title justify"><strong>Potasio:</strong> carnes, leche, frutas y verduras frescas, granos integrales, legumbres.</li><br>
          <li class="text-xs black--text title justify"><strong>Vitamina C:</strong> bayas, frutas cítricas, brócoli y pimentón.</li><br>
          <li class="text-xs black--text title justify"><strong>Vitamina B12:</strong> carnes, mariscos y productos lácteos.</li><br>
          <li class="text-xs black--text title justify"><strong>Calcio:</strong> pescados con huesos enlatados como salmón o sardinas, tofu y leche de soya fortificados y legumbres.</li><br>
          <li class="text-xs black--text title justify"><strong>Magnesio:</strong> semillas y frutos secos, verduras de hojas verdes, mariscos y pescados, alcachofas y chocolates.</li><br>
        <p></p><br>
        <span class="text-xs black--text title justify">Fusiona estos dos elementos y definitivamente comenzarás a notar los cambios no solo en tu cuerpo, sino en la manera en como miras tu día a día; te enfermarás menos, tendrás más energía y tu salud será de las mejores para estar sano por más años.</span>
        <p></p><br>
        <v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/miss-universo-cliente" >Ver nota</v-btn>
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
   img.imagen_universo{
    height 400px
    width 600px !important
  }
</style>
