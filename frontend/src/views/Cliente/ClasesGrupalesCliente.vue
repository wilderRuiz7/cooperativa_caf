<template>
<div class="fondo">
    <p></p><br>
<v-container fluid>
      <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md1 child-flex>
          <v-card color="transparent" dark flat>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md5>
          <v-card color="transparent" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md10>
        <p></p>
        <h1 class="text-xs white--text display-2 font-weight-black">CLASES</h1><br>
        <h1 class="text-xs white--text display-4 font-weight-black">GRUPALES</h1>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
                <v-flex d-flex xs12 sm3 md1 offset-xs1>
              <v-card color="transparent" dark flat>
                  <img class="imagen_icon" src="../../assets/transport.png" alt=""><br>
                  <p></p>
                  <img class="imagen_icon" src="../../assets/sports (2).png" alt=""><br>
                  <p></p>
                  <img class="imagen_icon" src="../../assets/sports (3).png" alt="">
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm3 md1>
              <v-card color="transparent" dark flat>
                  <v-btn color="blue darken-4" class="font-weight-black white--text title" >Spinning</v-btn><br>
                  <p></p><br>
                  <v-btn color="blue darken-4" class="font-weight-black white--text title" >Jaula</v-btn><br>
                  <p></p><br>
                  <v-btn color="blue darken-4" class="font-weight-black white--text title" >Aérobicos</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
       <p></p>
        <h1 class="text-xs-center white--text display-2">DESCUBRE NUESTRAS <strong>CLASES GRUPALES</strong></h1><br>
<v-container fluid >
   <v-layout row wrap>
    <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="spinning" class="spinning" @click="clickPush('/spinning-cliente')">
        <h1 class="escrito" >SPINNING</h1>
        </v-img>
          <v-img :src="aerobicos" class="spinning" @click="clickPush('/aerobicos-cliente')">
        <h1 class="escrito" >AEROBICOS</h1>
        </v-img>
       <v-img :src="crossfit" class="spinning" @click="clickPush('/crossfit-cliente')">
        <h1 class="escrito" >CROSSFIT</h1>
        </v-img>
    </v-flex>
   </v-layout>
      <v-layout row wrap>
 <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="cardio" class="spinning" @click="clickPush('/cardio-cliente')">
        <h1 class="escrito" >CARDIO BOX</h1>
        </v-img>
          <v-img :src="hard" class="spinning" @click="clickPush('/hard-cliente')">
        <h1 class="escrito" >HARD CYCLING</h1>
        </v-img>
       <v-img :src="rumba" class="spinning" @click="clickPush('/rumba-cliente')">
        <h1 class="escrito" >RUMBA</h1>
        </v-img>
    </v-flex>
   </v-layout>
     <v-layout row wrap>
 <v-flex xs12 sm6 md12 class="contenedor">
        <v-img :src="multiterreno" class="spinning" @click="clickPush('/multiterreno-cliente')">
        <h1 class="escrito" >MULTITERRENO</h1>
        </v-img>
          <v-img :src="entrenamiento" class="spinning" @click="clickPush('/entrenamiento-cliente')">
        <h1 class="escrito" >CIRCUITOS DE ENTRENAMIENTO</h1>
        </v-img>
       <v-img :src="shiatsu" class="spinning" @click="clickPush('/shiatsu-cliente')">
        <h1 class="escrito" >SHIATSU</h1>
        </v-img>
    </v-flex>
   </v-layout>
    </v-container>
</div>
</template>
<script>
import SPINNING from '@/assets/spinning-f.jpg'
import AEROBICOS from '@/assets/aerobicos-f.jpg'
import CROSSFIT from '@/assets/cross-fit-f.jpg'
import ENTRENAMIENTO from '@/assets/circuitos-de-entrenamiento-f.jpg'
import CARDIO from '@/assets/cardio-box-f.jpg'
import HARD from '@/assets/cycling-f.jpg'
import RUMBA from '@/assets/rumba-f.jpg'
import MULTITERRENO from '@/assets/multiterreno-f.jpg'
import SHIATSU from '@/assets/shiatsu-f.jpg'
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
      spinning: SPINNING,
      aerobicos: AEROBICOS,
      crossfit: CROSSFIT,
      entrenamiento: ENTRENAMIENTO,
      cardio: CARDIO,
      hard: HARD,
      rumba: RUMBA,
      multiterreno: MULTITERRENO,
      shiatsu: SHIATSU
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
    &hover{
      cursor pointer
    }
  }
  img.imagen_icon{
    height: 60px
    width: 60px !important
    margin: 0px 0px 0px 40px
  }
  h1.escrito{
    text-align: center
    font-size: 30px
    color: white
    margin: -150px 0px 0px 0px!important
    padding: 10px
    font-family: sans-serif
  }
  li{
    margin: 0px 0px 0px 60px
  }
  p.texto{
    background-color: silver !important
    text-align: center
    border: solid 2px
    font-size: 16px
    margin: -5px 0px 0px -1px
    padding: 10px
    font-family: sans-serif
  }
  article{
    margin: 0px 0px 0px 60px
  }
  div.fondo{
      background-image: url('../../assets/gym.jpg') !important
      margin-top: -14px
  }
  .contenedor{
    padding: 20px
    text-align: center
  }
</style>
