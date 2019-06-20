<template>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md12>
                <p></p>
        <h1 class="text-xs-left black--text display-2 font-weight-black">MI DIETA</h1><br>
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
        <td class="text-xs-center">{{ props.item.nada }}</td>
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
          nada: '',
          lunes: 'Lunes',
          martes: 'Martes',
          miercoles: 'Miércoles',
          jueves: 'Jueves',
          viernes: 'Viernes',
          sabado: 'Sábado'
        },
        {
          nada: 'Desayuno',
          lunes: 'Avena en hojuelas, cucharada de miel, 20 gramos de pavo y zumo de naranja',
          martes: 'Avena en hojuelas, cucharada de miel, 20 gramos de pavo y zumo de naranja',
          miercoles: 'Avena en hojuelas, cucharada de miel, 20 gramos de pavo y zumo de naranja',
          jueves: 'Avena en hojuelas, cucharada de miel, 20 gramos de pavo y zumo de naranja',
          viernes: 'Avena en hojuelas, cucharada de miel, 1 lata de atún y zumo de naranja',
          sabado: 'Avena en hojuelas, cucharada de miel, 1 lata de atún y zumo de naranja'
        },
        {
          nada: 'Almuerzo',
          lunes: 'Sandiwch integral de atún y plátano',
          martes: 'Sandiwch integral de atún y frutos secos',
          miercoles: 'Sandiwch integral de atún y plátano',
          jueves: 'Sandiwch integral de atún y frutos secos',
          viernes: 'Sandiwch integral de atún y plátano',
          sabado: 'Sandiwch integral de atún y frutos secos'
        },
        {
          nada: 'Comida',
          lunes: 'Arroz integral y pechugas de pollo o salmón a la plancha',
          martes: 'Lentejas cocidas sin grasa y solomillo de ternera a la plancha',
          miercoles: 'Ensalada de pasta integral, langostinos o pulpo a la plancha',
          jueves: 'Arroz integral y pechugas de pollo o pavo a la plancha',
          viernes: 'Verduras a la plancha, filete de ternera grande',
          sabado: 'Arroz integral y pechugas de pollo o pavo a la plancha'
        },
        {
          nada: 'Merienda',
          lunes: '3 tortas de arroz 3 lonchas de pavo y un plátano',
          martes: '3 tortas de arroz 3 lonchas de pavo y un plátano',
          miercoles: '3 tortas de arroz 3 lonchas de pavo y un plátano',
          jueves: '3 tortas de arroz 3 lonchas de pavo y un plátano',
          viernes: '3 tortas de arroz 3 lonchas de pavo y un plátano',
          sabado: '3 tortas de arroz 3 lonchas de pavo y un plátano'
        },
        {
          nada: 'Cena',
          lunes: 'Puré de papa y lomo de cerdo',
          martes: 'Puré de papa y lomo de cerdo',
          miercoles: 'Puré de papa y lomo de cerdo',
          jueves: 'Puré de papa y lomo de cerdo',
          viernes: 'Puré de papa y lomo de cerdo',
          sabado: 'Puré de papa y lomo de cerdo'
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
