<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="white" dark flat>
        <h1 class="text-xs blue--text headline">PLANES Y <br><strong>TARIFAS</strong></h1><br>
        <p class="text-xs blue--text title"><strong>¡Cumple tus metas!</strong></p>
        <span class="text-xs black--text body-1"><strong>En CHON'S GYM te ayudaremos a cumplir tu
meta, realizando planes y rutinas
personalizadas para adelgazar, fortalecer o
definir, también tendrás consejos
alimenticios para que complementes y logres
un mayor avance hacia tus objetivos.
</strong></span>
<v-spacer></v-spacer><br>
<p></p><hr>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md3>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10 offset-xs2>
      <v-card flat>
          <v-card-title class="blue">
            <div>
              <h3 class="headline white--text">Descripción del plan</h3>
            </div>
          </v-card-title>
          <v-img
            :src="img"
            aspect-ratio="1"
            class="planes"
          ></v-img>
          <v-card-title class="black">
            <div>
               <p class="headline white--text"><strong>1 Mes + 4 Sesiones de Personalizado<br> Subtotal 169.000 <br> Total a pagar 169.000</strong></p>
            </div>
          </v-card-title>
        </v-card>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md6>
              <v-card color="white" dark flat>
                <h1 class="text-xs-center black--text headline">CONOCE NUESTRAS <strong>INSTALACIONES</strong></h1>
   <v-layout>
    <v-flex xs12 sm6 md10 offset-xs1>
      <v-card color="white" drak flat>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in imagenes"
              :key="n"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="n.url"
                  :lazy-src="n.url"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
 <v-card color="transparent text-xs-center" flat>
  <a href="#" class="blue--text title" @click="clickPush('/instalaciones-cliente')">Ver más</a>
  </v-card>
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md2 child-flex>
          <v-card color="white" dark flat>
        <h1 class="text-xs blue--text title"><strong>HORARIOS</strong></h1><br>
        <h2 class="text-xs black--text body-1"><strong>LUN-JUE: 3AM a 11PM</strong></h2>
        <h3 class="text-xs black--text body-1"><strong>VIE: 3AM a 10PM</strong></h3>
        <p class="text-xs black--text body-1"><strong>SAB-DOM-FEST: 6AM a 6PM</strong></p>
  <img class="imagen_logo" src="../../assets/Logo-gym.png" alt="">
  <p></p>
        <h2 class="text-xs black--text body-1"><strong>Dirección: Cra 9 #28-56</strong></h2>
        <h3 class="text-xs black--text body-1"><strong>Télefono: 31857420</strong></h3>
        <p class="text-xs black--text body-1"><strong>Correo: chonsgym@gmail.com</strong></p>
          </v-card>
        </v-flex>

         <v-flex d-flex xs12 sm6 md7 >
          <v-card color="white" dark flat>
      <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
        <li class="text-xs black--text title">Incluye valoración inicial<br></li>
        <li class="text-xs black--text title">Incluye Membresía Neurofitness <br></li>
        <li class="text-xs black--text title">No aplica congelación<br> </li>
  <li class="text-xs black--text title">El valor del plan se debitará mensualmente de la tarjeta
 asociada por el usuario<br></li>
 <p></p>
 <h1 class="text-xs-center black--text display-1"><strong>Beneficios</strong></h1><br>
       <article class="text-xs black--text title justify">Membresía que te permite acceder a todas nuestras
sedes durante la vigencia de tu plan.
Ingreso a zona cardio vascular, zona de pesas, clases grupales,
spinning, jaula y zonas húmedas</article>
<p></p>
<h1 class="text-xs-center black--text display-1"><strong>Condiciones</strong></h1><br>
       <article class="text-xs black--text title justify">Tiene derecho a 4 clases de entrenamiento personalizado con una duración de 1
hora cada una.
Las clases podrán ser tomadas en un mínimo de 1 semana y en un máximo de 4
semanas.
No tiene derecho a congelación o cancelación de las clases dentro del mes
pagado.
Las clases solo pueden ser tomadas por la persona que adquirió el plan y no
tiene derecho a ser trasferidas a otra persona.
El horario de programación de las clases, se hará directamente con el entrenador
personalizado en caso de querer cambiar el horario deberá informar a este con
12 horas de anticipación.
En caso de no asistir a la clase acordada y no informar con anticipación al
entrenador, se dará como tomada la clase.
</article>
<p></p>
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</div>

</template>
<script>
import img from '@/assets/personalizados.jpg'
import img1 from '@/assets/zumba2.jpg'
import img2 from '@/assets/vestuario3.jpg'
import img3 from '@/assets/pesas1.jpg'
import img4 from '@/assets/crossfit2.jpg'
import img5 from '@/assets/cardio3.jpg'
import img6 from '@/assets/zumba3.jpg'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    clickPush (value) {
      this.$router.push(value)
    }
  },
  data () {
    return {
      img: img,
      imagenes: [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 },
        { url: img6 }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
 img.imagen_layout{
    height 260px
    width 285px !important
  }
  img.imagen_logo{
    height 160px
    width 160px !important
  }
  p.texto{
    background-color silver !important
    text-align center
    border solid 2px
    font-size 16px
    margin -5px 0px 0px -1px
    padding 10px
    font-family sans-serif
  }
  li{
    margin 0px 0px 0px 60px
  }
  article{
    margin 0px 0px 0px 60px
  }
</style>
