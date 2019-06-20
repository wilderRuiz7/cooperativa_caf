<template>
<div>
    <v-container fluid>
        <v-layout row wrap>
                        <v-flex d-flex xs12 sm6 md3>
        </v-flex>
               <v-flex d-flex xs12 sm6 md6>
                   <p></p><br>
          <h1 class="text-xs-center black--text display-2">CONSEJOS<strong> SALUDABLES</strong></h1>
      <p></p>
        </v-flex>
        </v-layout>
                <v-flex d-flex xs12 sm6 md3>
        </v-flex>
    </v-container>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md6>
          <v-card class="tips" dark flat>
            <h1 class="text-xs blue--text headline font-italic"><strong>El ejercicio como rutina para bajar de peso</strong></h1>
              <p></p>
                 <span class="text-xs black--text caption justify">Para reducir medidas es necesario que complementes tu dieta alimenticia con ejercicios para bajar de peso, cuyo propósito principal sea moldear tu cuerpo para que se vea esbelto, tonificado y libre de los temidos “gorditos” Pese a que es difícil los primeros días, es vital que adoptes el ejercicio físico como un hábito para toda la vida.</span><br>
              <p></p>
          <span class="text-xs black--text caption justify">La rutina para bajar de peso no sólo implica un factor estético sino también un beneficio para la salud, ya que si te mantienes en tu peso ideal se reducirán los riesgos de enfermedades cardiovasculares como la hipertensión o padecimientos más generales como la diabetes que afecta varios órganos y tejidos del cuerpo.</span><br>
               <p></p>
          <span class="text-xs black--text caption justify">La mejor forma para disminuir tallas es que realices rutinas de gimnasio ordenadas en un plan de entrenamiento físico que responda a tus necesidades y sea fundamental para construir una disciplina y cambiar tus hábitos a una vida saludable. Ejercicios para bajar de peso que involucren sesiones de spinning y cardio en la caminadora son muy efectivos para cumplir con las metas propuestas.</span><br>

              </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4>
          <v-card color="white" dark flat>
              <p></p><br>
        <img class="imagen_tips" src="../../assets/bajar_peso.jpg" alt="">
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
        <v-layout row wrap>
                        <v-flex d-flex xs12 sm6 md1>
        </v-flex>
               <v-flex d-flex xs12 sm6 md10>
                <v-card class="frases" flat>
        <v-btn color="black" class="font-weight-black white--text title" to="planes-cliente">Ver Planes</v-btn>
        <v-btn color="blue darken-4" class="font-weight-black white--text title" to="/horarios-cliente">Ver Horarios</v-btn>
                   </v-card>
        </v-flex>
        </v-layout>
                <v-flex d-flex xs12 sm6 md1>
        </v-flex>
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
 img.imagen_layout{
    height: 500px
    width: 700px !important
  }
  img.imagen_tips{
    height: 300px
    width: 400px !important
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
  .tips{
      padding: 0px 40px 0px 0px
      background-color: white!important
  }
  .frases{
    margin-top: -30px
  }
</style>
