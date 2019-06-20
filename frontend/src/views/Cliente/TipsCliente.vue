<template>
<div>
    <p></p><br>
<v-container fluid>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md1 child-flex>
        </v-flex>
         <v-flex d-flex xs12 sm6 md5>
          <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
        <p></p>
        <h1 class="text-xs black--text display-2 font-weight-black">CONSEJOS</h1><br>
        <h1 class="text-xs black--text display-4 font-weight-black">SALUDABLES</h1>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md1 child-flex>
        </v-flex>
                <v-flex d-flex xs12 sm3 md3 offset-xs1>
              <v-card color="transparent" dark flat>
        <h2 class="text-xs black--text display-1 justify"><strong>En Chon's Gym te damos opciones para motivarte</strong></h2>
        <p></p>
        <span class="text-xs black--text title justify">Es recurrente y una de las mejores opciones que puedes tomar para iniciar el compromiso y la disciplina de asistir al gimnasio; nosotros contamos con planes mensuales para que puedas hacer un pago adelantado del disfrute de nuestras instalaciones, clases grupales, zonas húmedas y máquinas de entrenamiento.</span>
        <p></p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
       <p></p>
        <h1 class="text-xs-center black--text display-2">DESCUBRE NUESTRAS <strong>CLASES GRUPALES</strong></h1><br>
<v-container fluid >
   <v-layout row wrap>
    <v-flex xs12 sm6 md12 class="contenedor">
        <v-img  :src="ejercicio" class="spinning" @click="clickPush('/ejercicio-fisico-cliente')">
        <h1 class="escrito1" >Ejercicio físico</h1>
        </v-img>
          <v-img :src="hidratacion" class="spinning" @click="clickPush('/hidratacion-cliente')">
        <h1 class="escrito1" >hidratación</h1>
        </v-img>
       <v-img :src="minutos" class="spinning" @click="clickPush('/minutos-cliente')">
        <h1 class="escrito1" >20 minutos de cardio</h1>
        </v-img>
    </v-flex>
   </v-layout>
      <v-layout row wrap>
 <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="consume" class="spinning" @click="clickPush('/carbohidratos-cliente')">
        <h1 class="escrito1" >Consume carbohidratos</h1>
        </v-img>
          <v-img :src="duerme" class="spinning" @click="clickPush('/duerme-bien-cliente')">
        <h1 class="escrito1" >Duerme bien</h1>
        </v-img>
       <v-img :src="calentamiento" class="spinning" @click="clickPush('/calentamiento-cliente')">
        <h1 class="escrito1" >Ejercicios de calentamiento</h1>
        </v-img>
    </v-flex>
   </v-layout>
     <v-layout row wrap>
 <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="estiramiento" class="spinning" @click="clickPush('/estiramiento-cliente')">
        <h1 class="escrito1" >Importancia del estiramiento</h1>
        </v-img>
          <v-img :src="practicar" class="spinning" @click="clickPush('/practicar-cliente')">
        <h1 class="escrito1" >¿Quién puede practicar crossfit?</h1>
        </v-img>
       <v-img :src="consejos" class="spinning" @click="clickPush('/consejos-cliente')">
        <h1 class="escrito1" >Consejos para bajar de peso</h1>
        </v-img>
    </v-flex>
   </v-layout>
    </v-container>
</div>
</template>
<script>
import EJERCICIO from '@/assets/ejercicio_c.jpg'
import HIDRATACION from '@/assets/hidratacion_c.jpg'
import MINUTOS from '@/assets/cardio_c.jpg'
import CONSUME from '@/assets/carbohidratos_c.jpg'
import DUERME from '@/assets/dormir-bien_c.jpg'
import CALENTAMIENTO from '@/assets/calentar_c.jpg'
import ESTIRAMIENTO from '@/assets/estiramiento_c.jpg'
import PRACTICAR from '@/assets/practicar_crossfi_c.jpg'
import CONSEJOS from '@/assets/bajar_peso_c.jpg'
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
      ejercicio: EJERCICIO,
      hidratacion: HIDRATACION,
      minutos: MINUTOS,
      consume: CONSUME,
      duerme: DUERME,
      calentamiento: CALENTAMIENTO,
      estiramiento: ESTIRAMIENTO,
      practicar: PRACTICAR,
      consejos: CONSEJOS
    }
  }
}
</script>
<style lang="stylus" scoped>
 img.imagen_gym{
    height 270px
    width 370px !important
    margin 0px 20px 0px 20px
  }
  .spinning{
    padding 40px 30px 0px 50px
    display inline-block
    height 215px
    width 350px
    margin-right 40px
    &:hover{
      cursor pointer
    }
  }
  img.imagen_icon{
    height 60px
    width 60px !important
    margin 0px 0px 0px 40px
  }
  h1.escrito{
    text-align center
    font-size 30px
    color white
    margin -200px 0px 0px 0px
    padding 10px
    font-family sans-serif
  }
  h1.centro{
    text-align center
    font-size 15px
    color white
    font-family sans-serif
    margin-top -20px
  }
  li{
    margin 0px 0px 0px 60px
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
  article{
    margin 0px 0px 0px 60px
  }
  div.fondo{
      background-image url('../../assets/gym.jpg') !important
      margin-top -14px
  }
  .contenedor{
    padding 20px
    text-align center
  }
  h1.escrito1{
    text-align center
    font-size 30px
    color white
    margin -100px 0px 0px 0px!important
    padding 10px
    font-family sans-serif
  }
</style>
