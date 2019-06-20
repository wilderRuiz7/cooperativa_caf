<template>
<div class="noticia">
    <p></p><br>
<v-container fluid>
      <v-layout row wrap>
                <v-flex d-flex xs12 sm6 md12>
          <h1 class="text-xs-center white--text display-3">ÚLTIMAS <strong>NOTICIAS</strong></h1>
             </v-flex>
           <v-flex d-flex xs12 sm6 md1 >
        </v-flex>
          <v-flex d-flex xs12 sm6 md5>
             <img class="belleza" src="../../assets/categoria-belleza.jpg" alt="">
        </v-flex>
         <v-flex d-flex xs12 sm6 md3 class="letrero">
                     <v-card class="caja" dark flat>
                     <br> <br> <br>
        <h1 class="text-xs white--text display-1 font-italic">NOTICIAS DE <br><strong>BELLEZA</strong></h1><br>
        <article class="text-xs white--text title">Resalta tu belleza natural conociendo todos los beneficios que traen las rutinas de ejercicios para tu cuerpo, no hay excusas para dar inicio a este nuevo estilo de vida</article><br>
        <p></p><br>
 <v-btn color="white" class="right font-weight-black black--text title" to="/noticias-belleza-cliente">Ver más</v-btn>
          </v-card>
        </v-flex>
    <v-flex xs12 sm6 md4>
    </v-flex>
  </v-layout>
</v-container>

<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md4 >
        </v-flex>
          <v-flex d-flex xs12 sm6 md3>
             <img class="belleza2" src="../../assets/Equilibrio.jpg" alt="">
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon">
                     <v-card class="caja" dark flat>
                     <br> <br> <br>
        <h1 class="text-xs white--text display-1 font-italic">MENTE Y <br><strong>EQUILIBRIO</strong></h1><br>
        <article class="text-xs white--text title">Lograr un balance entre tu cuerpo y mente no es tan complicado como crees, encuentra información y todas las razones que necesitas para iniciar un entrenamiento físico.</article><br>
        <p></p><br>
 <v-btn color="white" class="right font-weight-black blue--text title" to="/mente-equilibrio-cliente">Ver más</v-btn>
          </v-card>
        </v-flex>
    <v-flex xs12 sm6 md1>
    </v-flex>
  </v-layout>
</v-container>

<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1 >
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon2">
                             <v-card class="caja" dark flat>
                                    <br> <br> <br>
        <h1 class="text-xs black--text display-1 font-italic">BIENESTAR Y <br><strong>SALUD</strong></h1><br>
        <article class="text-xs black--text title">Para estar saludable debes estar al tanto de todo lo que pasa a tu alrededor, enterate de los diferentes métodos alimenticios y rutinas de ejercicio físico.</article><br>
        <p></p>
<v-btn color="black" class="right font-weight-black white--text title" to="/bienestar-cliente" >Ver más</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 >
      <img class="belleza" src="../../assets/salud.jpg" alt="">
        </v-flex>
    <v-flex xs12 sm6 md3>
    </v-flex>
  </v-layout>
</v-container>

<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md4 >
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon3">
                             <v-card class="caja" dark flat>
                               <br> <br><br><br> <br>
        <h1 class="text-xs black--text display-2 font-italic">NUEVAS <strong>RUTINAS</strong></h1>
        <p></p><br>
        <article class="text-xs black--text headline">Conoce los beneficios que traen las rutinas de ejercicios para recuperar no solo la figura, sino la salud de tu cuerpo. </article><br>
        <p></p><br>
<v-btn color="black" class="right font-weight-black white--text title" to="/nuevas-rutinas-cliente" >Ver más</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md3 >
      <img class="belleza2" src="../../assets/Rutinas.jpg" alt="">
        </v-flex>
    <v-flex xs12 sm6 md1>
    </v-flex>
  </v-layout>
    <p></p><br>
</v-container>
</div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  data: () => ({
  })
}
</script>
<style lang="stylus" scoped>
 img.belleza{
    height 460px
    width 385px !important
    margin-top 20px
  }
  img.belleza2{
    height 540px
    width 363px !important
  }
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
  div.noticia{
      background-color black !important
      margin-top -14px
  }
  .letrero {
      padding 40px
      background-color rgb(49, 53, 49)
      border-top-right-radius 10%
      height 460px
      margin-top 20px
  }
  .letrero2 {
      padding 40px
      background-color rgb(49, 53, 49)
      border-bottom-right-radius 10%
  }
  .cajon {
      padding 80px
      background-color rgb(9, 26, 182)
      margin -1px
      border-bottom-right-radius  10%
  }
  .cajon2 {
      padding 40px
      background-color white
      margin-top 20px
      border-bottom-left-radius  10%
  }
  .cajon3  {
      padding 60px
      background-color rgb(5, 159, 197)
      margin -1px
      border-top-left-radius  10%
  }
  .caja{
        background-color transparent !important
        margin-top -40px
  }
  .informacion{
        background-color transparent !important
        margin-top -70px
  }
  h1.fuente {
      font-size 30px
      color white
  }
  span.significado {
      font-size 20px
      color white
      margin-top 100px
  }
</style>
