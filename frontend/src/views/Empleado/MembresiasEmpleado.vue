<template>
  <div>
      <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="first"
              label="Usuario"
              box
            ></v-text-field>
          </v-flex>

           <v-flex xs6>
          <v-combobox
            v-model="select"
            :items="items"
            label="Seleccione el tipo de plan"
          ></v-combobox>
        </v-flex>
        </v-layout>
      </v-container>
    </v-form>

      <v-btn color="green darken-4" class=" white--text display-1" >Registrar Membresia</v-btn>
      <v-btn color="red darken-4" class=" white--text display-1" >Cancelar</v-btn>

      <v-card color="blue">
      <v-card-title>
        Membresias
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.membresia }}</td>
          <td class="text-xs-right">{{ props.item.pagototal }}</td>
          <td class="text-xs-right">{{ props.item.fecha }}</td>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
      </v-card>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'empleado-layout')
  },

  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Usuarios',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Membresia', value: 'membresia' },
        { text: 'Pago Total', value: 'pagototal' },
        { text: 'Fecha', value: 'fecha' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          membresia: 159,
          pagototal: 6.0,
          fecha: 2018
        }
      ],
      select: 'Masaje',
      items: [
        'Masaje',
        'Hidroterapia',
        'Plan 1 mes',
        'Plan 3 meses'
      ],
      first: 'John'

    }
  }
}
</script>
<style lang="stylus" scoped>
   .container.fill-height{
     background-color dark
  }
  .theme--dark.v-sheet{
    background-color blue
  }
</style>
