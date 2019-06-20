<template>
<div>
    <p></p>
<v-container fluid>
    <p></p>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
        <h1 class="text-xs-center black--text display-1 font-italic"><strong>ASISTE A UNA CONSULTA NUTRICIONISTA</strong></h1>
        </v-flex>
      </v-layout>
        </v-container>

           <v-container>
               <v-layout>
                   <v-flex d-flex xs12 sm6 md2>
          </v-flex>
          <v-flex d-flex xs12 sm6 md6 class="cuadro">
              <v-card flat>
                  <p></p><br>
               <img class="imagen_nutricionista" src="../../assets/nutricionista.jpg" alt="">
               <p></p>
               <v-btn color="blue darken-4" class="font-weight-black white--text title" to="/planes-cliente" >Ver planes</v-btn>
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
  img.imagen_nutricionista{
    height 1280px
    width 1018px !important
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
