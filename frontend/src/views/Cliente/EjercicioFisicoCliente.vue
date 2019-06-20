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
            <h1 class="text-xs blue--text display-1 font-italic"><strong>Ejercicio Físico</strong></h1>
              <p></p>
            <h2 class="text-xs black--text title font-italic"><strong>¿Qué es el ejercicio físico?</strong></h2>
            <span class="text-xs black--text caption justify">El ejercicio físico es toda aquella actividad físico-recreativa ejecutada en tiempo libre con una alta intensidad de multiples ejercicios, de la que se obtiene una vivencia placentera, un estilo de vida  comunicativo, creativa y social de las prácticas corporales. A ésta, hay por añadir la realización de movimientos corporales planificados, repetidos y sujetos a orientación de un instructor.</span><br>
              <p></p>
               <h2 class="text-xs black--text title font-italic"><strong>¿Cuál es su importancia?</strong></h2>
            <span class="text-xs black--text caption justify">Derivada de una práctica regular de una rutina de ejercicios planeada, se obtienen beneficios relacionados con la salud corporal así como una incidencia positiva en aspectos como la autoestima personal y además existe una correlación entre deporte y socialización, dado que la actividad física tiende a estrechar lazos entre las personas que lo practican con frecuencia en diferentes modalidades como lo es el ejercicio aeróbico. </span><br>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md4>
          <v-card color="white" dark flat>
        <img class="imagen_tips" src="../../assets/ejercicio-fisico.jpg" alt="">
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
            <h2 class="text-xs black--text title font-italic"><strong>¿Cómo incorporarlo a la vida diaria?</strong></h2>
            <span class="text-xs black--text caption justify">Es una cuestión de disciplina y de gusto por el entrenamiento físico; sin embargo, los deportólogos coinciden que todo parte de hacer pequeños cambios en la vida cotidiana implementando programas de ejercicio. Respetar las pausas activas en la oficina, por ejemplo; caminar por 20 minutos al día o hacer estiramientos en el parque y mantener la constancia es el principio para dinamizar la vida y mantener tu condicion fisica.</span><br>
              <p></p>
               <h2 class="text-xs black--text title font-italic"><strong>¿Cuál es su utilidad?</strong></h2>
            <span class="text-xs black--text caption justify">Depende de las necesidades de la persona. La practica de ejercicio que para esto, nada mejor que contar con la ayuda de un médico deportólogo que es el que brinda las orientaciones clave, de acuerdo al estado físico del paciente, para trazar una rutina específica para mantenerte en buen forma fisica.</span><br>
            <p></p>
            <span class="text-xs black--text caption justify">Una cosa es tener un plan de ejercicio fisico de forma regular, con una dieta asignada, frecuencia de la actividad física, rutinas, etc., y otra es hacerlo de manera espontánea, sin indicación alguna. Lo anterior significa que es necesaria la orientación de un especialista para alcanzar los logros propuestos .</span><br>
            <p></p><br><hr>
            <p></p><br>
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
    height 500px
    width 700px !important
  }
  img.imagen_tips{
    height 300px
    width 400px !important
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
  .tips{
      padding 0px 40px 0px 0px
      background-color white!important
  }
  .frases{
    margin-top -30px
  }
</style>
