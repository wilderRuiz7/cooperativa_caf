<template>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
                <p></p>
        <h1 class="text-xs-left black--text display-2 font-weight-black">MI RUTINA</h1><br>
        <br><br>
          </v-flex>
          <v-flex d-flex xs12 sm6 md1>
          </v-flex>
          <v-flex d-flex xs12 sm6 md10>
  <v-data-table
    :items="desserts"
    class="elevation-1"
    hide-actions
    hide-headers
  >
    <template v-slot:items="props" class="font_color">
       <td class="text-xs-center">{{ props.item.lunes }}</td>
        <td class="text-xs-center">{{ props.item.martes }}</td>
        <td class="text-xs-center">{{ props.item.miercoles }}</td>
        <td class="text-xs-center">{{ props.item.jueves }}</td>
        <td class="text-xs-center">{{ props.item.viernes }}</td>
        <td class="text-xs-center">{{ props.item.sabado }}</td>
    </template>
  </v-data-table>
          </v-flex>
    <v-flex d-flex xs12 sm6 md1>
          </v-flex>
           <v-flex d-flex xs12 sm6 md12>
                <p></p>
        <br><br>
          </v-flex>
      </v-layout>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      desserts: [
        {
          lunes: 'Lunes',
          martes: 'Martes',
          miercoles: 'Miércoles',
          jueves: 'Jueves',
          viernes: 'Viernes',
          sabado: 'Sábado'
        },
        {
          lunes: 'Pecho',
          martes: 'Espalda',
          miercoles: 'Pierna',
          jueves: 'Pecho',
          viernes: 'Espalda',
          sabado: 'Pierna'
        },
        {
          lunes: 'Press banca inclinado 4 x 12',
          martes: 'Dominadas 4 x 12',
          miercoles: 'Sentadillas 4 x 12',
          jueves: 'Press banca inclinado 4 x 12',
          viernes: 'Dominadas 4 x 12',
          sabado: 'Sentadillas 4 x 12'
        },
        {
          lunes: 'Aperturas inclinadas 3 x 12',
          martes: 'Jalón tras nuca 3 x 12',
          miercoles: 'Peso muerto con barra 4 x 12',
          jueves: 'Press banca plano 3 x 12',
          viernes: 'Jalón tras nuca 3 x 12',
          sabado: 'Peso muerto con barra 4 x 12'
        },
        {
          lunes: 'Press banca plano 4 x 12',
          martes: 'Remo 4 x 12',
          miercoles: 'Elevaciones de talón con barra 3 x 15',
          jueves: 'Aperturas planas 4 x 12',
          viernes: 'Remo 4 x 12',
          sabado: 'Elevaciones de talón con barra 3 x 15'
        },
        {
          lunes: 'Pull Over 3 x 12',
          martes: 'Remo con barra 3 x 12',
          miercoles: 'Sentadilla con balón 3 x 12',
          jueves: 'Press banca declinado 3 x 12',
          viernes: 'Pull Over 3 x 12',
          sabado: 'Sentadilla con balón 3 x 12'
        },
        {
          lunes: 'Hombro',
          martes: 'Biceps',
          miercoles: 'Trapecio',
          jueves: 'Hombro',
          viernes: 'Biceps',
          sabado: 'Trapecio'
        },
        {
          lunes: 'Press Arnold 3 x 12',
          martes: 'Curl inclinado con mancuernas 3 x 12',
          miercoles: 'Encogimientos con mancuerna 3 x 12',
          jueves: 'Press Arnold 3 x 12',
          viernes: 'Curl con barra 3 x 12',
          sabado: 'Encogimientos con mancuerna 3 x 12'
        },
        {
          lunes: 'Elevaciones frontales 3 x 12',
          martes: 'Curl martillo 3 x 12',
          miercoles: 'Encogimientos traseros con barra 3 x 12',
          jueves: 'Elevaciones laterales 3 x 12',
          viernes: 'Curl martillo 3 x 12',
          sabado: 'Encogimientos traseros con barra 3 x 12'
        },
        {
          lunes: 'Pájaros 3 x 12',
          martes: 'Curl concentrado 3 x 12',
          miercoles: 'Encogimientos inclinados con barra 3 x 12',
          jueves: 'Elevaciones frontales 3 x 12',
          viernes: 'Curl predicador 3 x 12',
          sabado: 'Encogimientos inclinados con barra 3 x 12'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.elevation-1{
    border: solid 2px gray
}
.font_color{
    font-size: 20px
}
</style>
