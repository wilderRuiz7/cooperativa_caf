<template>
<div>
    <p></p><br>
           <v-flex d-flex xs12 sm6 md12>
            <h1 class="text-xs-center black--text display-2"><strong>ENTRENADORES</strong></h1>
        </v-flex>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md6>
          <v-card color="white" dark flat>
       <h1 class="text-xs black--text display-1">CARLOS<strong> RAMIREZ</strong></h1>
       <p></p><br>
        <span class="text-xs black--text title justify">Teléfono: 3144755885</span><br>
        <p></p>
        <span class="text-xs black--text title justify">Correo electrónico: carlos_ramiez4653@gmail.com</span><br>
        <p></p>
        <span class="text-xs black--text subheading justify">Entrenador personal con once años de experiencia con los conocimientos físicos, sociales y psicológicos necesarios para desarrollar esta labor con plenas garantías y la certeza de que el cliente obtenga las metas que se proponga. Mi vocación y pasión por este trabajo y la constancia con la que afronto todos los retos, son un valor que pueden acreditar todas aquellas personas a las que he prestado mis servicios.</span><br>
        <p></p>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md3>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md12 offset-xs1>
      <p></p>
        <v-img
            src="https://i.blogs.es/a219d8/sergio-peinado1/450_1000.jpg"
            aspect-ratio="1"
            class="entrenadores"
            width="200"
            height="300"
          ></v-img>
        <p></p><br>
    </v-flex>
  </v-layout>
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
           <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md8>
          <v-card color="white" dark flat class="info_entrenador">
        <h2 class="text-xs black--text headline justify"><strong>Cualidades a destacar</strong></h2>
        <p></p>
          <li class="text-xs black--text subheading justify">Preparador físico</li><br>
          <li class="text-xs black--text subheading justify">Monitor de gimnasio</li><br>
          <li class="text-xs black--text subheading justify">Planificador de rutinas</li><br>
        <p></p>
           <h2 class="text-xs black--text headline justify"><strong>Experiencia</strong></h2>
        <p></p>
          <li class="text-xs black--text subheading justify">Octubre de 2012 a Mayo de 2015. Monitor en el Gimnasio Body Confort en Bucaramanga. Planificador y director de clases de spinning, body combat y crossfit. Encargado de realizar las tablas de ejercicios y la planificación de rutinas de los clientes.</li><br>
          <li class="text-xs black--text subheading justify">Julio de 2015 a Septiembre de 2017. Preparador físico en la Academia Fitness Center en Pinchote. Encargado de preparar y planificar los ejercicios de los alumnos aspirantes a representar a Pinchote en los juegos departamentales de crossfit con un alto índice de aprobados en las pruebas físicas.</li><br>
          <li class="text-xs black--text subheading justify">Diciembre de 2017 a la actualidad. Entrenador de levantamiento de pesas en el gimnasio Chon's Gym en la cual es encargado de toda clase de ejercicios físicos, además de un trabajo de motivación psicológica y tareas que acompañan a dietas de fortalecimiento del cuerpo.</li><br>
        <p></p>
           <h2 class="text-xs black--text headline justify"><strong>Formación</strong></h2>
        <p></p>
          <li class="text-xs black--text subheading justify">2007. Título Técnico de  Entrenador Personal en el Servicio Nacional de Aprendizaje (SENA)</li><br>
          <li class="text-xs black--text subheading justify">2008. Título de Entrenador Personal en el Instituto de Ciencias de la Salud y la Actividad Física.</li><br>
          <li class="text-xs black--text subheading justify">20011. Máster en Dirección Técnica en Actividades Deportivas.</li><br>
           <v-btn color="black" class="font-weight-black white--text title" to="planes-cliente">Ver Planes</v-btn>
        <v-btn color="blue darken-4" class="right font-weight-black white--text title" to="/horarios-cliente">Ver Horarios</v-btn>
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
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
 img.imagen_layout{
    height 500px
    width 700px !important
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
  .info_entrenador{
    margin-top -60px!important
  }
</style>
