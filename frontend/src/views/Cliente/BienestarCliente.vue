<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
            <h1 class="text-xs-center black--text display-2">CONOCE NUESTRAS NOTICIAS<br><strong>BIENESTAR Y SALUD</strong></h1>
        </v-flex>
        </v-layout>
</v-container>
<v-container fluid>
      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon5">
                             <v-card class="caja" dark flat>
        <h1 class="text-xs black--text title font-italic"><strong>TU PLAN DE ENTRENAMIENTO PARA CORRER</strong></h1><br>
        <span class="text-xs black--text subheading">Si quieres ser un runner y tener un buen plan de entrenamiento para correr, tienes que tener ganas de hacerlo, es lo más importante, pero además debes proponerte objetivos que de seguro superaras con esfuerzo y dedicación. Trata de alimentarte bien, tener un buen entrenamiento y un calzado adecuado. Conoce más para ser un gran runner en la siguiente nota.</span><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/correr-cliente" >Ver más</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 >
      <img class="retrato" src="../../assets/bienestar.jpg" alt="">
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
      <img class="retrato" src="../../assets/bienestar-2.jpg" alt="">
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon8">
      <img class="retrato2" src="../../assets/bienestar-3.jpg" alt="">
        </v-flex>
    <v-flex xs12 sm6 md2>
    </v-flex>
       </v-layout>
         <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md2>
        </v-flex>
          <v-flex d-flex xs12 sm6 md4 class="cajon6">
               <v-card class="informacion1" dark flat>
        <h1 class="text-xs black--text title font-italic"><strong>PLANEA TU ENTRENAMIENTO FÍSICO DE LA SIGUIENTE MANERA</strong></h1><br>
        <span class="text-xs black--text subheading">En Chon's Gym contamos con los mejores planes y entrenadores físicos para que tú decidas seguir mejorando tu condición física y estética. Planear un entrenamiento es cuestión de voluntad y decisión, se debe tener en cuenta que primero se deben plantear unos objetivos, y después buscar factores que ayuden a motivar cada día tu entrenamiento.</span><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/fisico-cliente" >Ver nota</v-btn>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4 class="cajon7">
               <v-card class="informacion" dark flat>
        <h1 class="text-xs black--text headline font-italic"><strong>ASISTE A NUESTRO NUTRICIONISTA</strong></h1><br>
        <p></p>
<v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/nutricionista-cliente" >Ver nota</v-btn>
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
    height: 500px
    width: 700px !important
  }
   img.retrato{
    height: 350px
    width: 400px !important
    border-top-right-radius: 10%
    border-bottom-left-radius: 10%
  }
  img.retrato2{
    height: 400px
    width: 400px !important
    border-top-right-radius: 10%
    border-bottom-left-radius: 10%
  }
  li{
    margin: 0px 0px 0px 0px
  }
  article{
    margin: 0px 0px 0px 60px
  }
  p.mensaje {
    font-size: 13px
    margin: 0px 0px 0px 440px
    font-family: sans-serif
    color: rgba(86, 86, 88, 0.877);
  }
   .cajon5   {
      padding: 50px 40px 50px 0px
      margin: 10px
  }
   .cajon6    {
      margin: 0px 10px 0px 0px
  }
     .cajon7     {
      margin: 0px 0px 0px 10px
      margin-top: 100px !important
  }
     .cajon8     {
      margin: 0px 0px 0px 10px
      margin-top: 150px !important
  }
  .informacion1{
        background-color: transparent !important
        margin-top: -180px
  }
  .caja{
    background-color transparent !important
  }
  .informacion{
     background-color transparent !important
  }
</style>
