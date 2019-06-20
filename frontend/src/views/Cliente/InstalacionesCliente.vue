<template>
   <v-container fluid>
      <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE CARDIO</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="letras center font-weight-regular black--text">Para lograr incrementar la quema de calorías diarias y mantener tu corazón en una excelente condición, podrás disfrutar de todos los aparatos de cardio que dispone Chon's Gym ubicados de manera estratégica para que puedas disfrutar plenamente de tu rutina.
La calidad de cada uno de nuestros aparatos de cardio.</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >
         <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="500px">
            <v-carousel-item v-for="(item1,i) in items1" :key="i" :src="item1.src">
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

       <v-layout row wrap>
       <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="500px">
      <v-carousel-item v-for="(item2,i) in items2" :key="i" :src="item2.src">
      </v-carousel-item>
    </v-carousel>
        </v-flex>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE PESAS</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="letras center font-weight-regular black--text">Podrás ejercitar tus músculos con el equipo más moderno de la región instalado en 500mts cuadrados de espacio con aparatos para todos los grupos musculares, peso integrado y pesos libres con discos de todos los pesos que te ayudaran a tonificar, reafirmar o aumentar tu volumen, logrando la imagen que siempre has deseado, para FIT lo más importante es tu salud y que logres tus objetivos. Aumenta el tono muscular, previene osteoporosis, aumenta tu fuerza y energía y aumento de tu taza metabólica para mayor quema de grasa.</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE ZUMBA</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="letras center font-weight-regular black--text">Para todos los ejercicios de baile en grupo que están disponibles en diversos horarios de nuestro gimnasio</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >
         <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="500px">
             <v-carousel-item v-for="(item3,i) in items3" :key="i" :src="item3.src">
             </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>

       <v-layout row wrap>
         <v-flex  d-flex xs6 sm6 md6>
          <v-carousel height="500px">
             <v-carousel-item v-for="(item4,i) in items4" :key="i" :src="item4.src">
               </v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE VESTUARIO</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="letras center font-weight-regular black--text">Para facilitar el cambio de vestuario de todos nuestros ususarios y tener un área de privacidad en todo momento</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >
      </v-layout>

       <v-layout row wrap>
        <v-flex d-flex xs6 sm md>
          <v-card flatcolor="transparent" >
            <v-card-text>
            <v-container  fill-height fluid>
              <v-layout fill-height>
                <v-flex  justify-center align-center xs12 align-end flexbox>
                  <v-card-title class="headline center font-weight-regular blue darken-4 white--text">ÁREA DE CROSSFIT</v-card-title>
                </v-flex>
              </v-layout>
            </v-container>
          <v-card-title class="contenido">
              <span class="letras center font-weight-regular black--text">Destinada a todos los ejercicios multifuncionales disponibles en nuestro gimnasio</span>
          </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex >
        <v-flex  d-flex xs6 sm6 md6>
          <v-carousel  height="500px">
            <v-carousel-item v-for="(item5,i) in items5" :key="i" :src="item5.src">
             </v-carousel-item>
            </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
import img1 from '@/assets/cardio1.jpg'
import img2 from '@/assets/cardio2.jpg'
import img3 from '@/assets/cardio3.jpg'
import img4 from '@/assets/pesas1.jpg'
import img5 from '@/assets/pesas2.jpg'
import img6 from '@/assets/pesas3.jpg'
import img7 from '@/assets/zumba1.jpg'
import img8 from '@/assets/zumba2.jpg'
import img9 from '@/assets/zumba3.jpg'
import img10 from '@/assets/vestuario1.jpg'
import img11 from '@/assets/vestuario2.jpg'
import img12 from '@/assets/vestuario3.jpg'
import img13 from '@/assets/crossfit1.jpg'
import img14 from '@/assets/crossfit2.jpg'
import img15 from '@/assets/crossfit3.jpg'
export default {
  data () {
    return {
      items1: [
        {
          src: img1
        },
        {
          src: img2
        },
        {
          src: img3
        }
      ],
      items2: [
        {
          src: img4
        },
        {
          src: img5
        },
        {
          src: img6
        }
      ],
      items3: [
        {
          src: img7
        },
        {
          src: img8
        },
        {
          src: img9
        }
      ],
      items4: [
        {
          src: img10
        },
        {
          src: img11
        },
        {
          src: img12
        }
      ],
      items5: [
        {
          src: img13
        },
        {
          src: img14
        },
        {
          src: img15
        }
      ]
    }
  }
}

</script>

<style lang="stylus" scoped>
.contenido{
  padding 10px 30px!important
}
.letras{
  font-size 25px
}
</style>
