<template>
  <div>
      <v-subheader class="subheader black--text display-1 font-weight-bold" >Inventario</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.serial"
              box
              label="Número de serial o codigo"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.nombre"
              box
              label="Nombre del Producto"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.marca"
              box
              label= "Marca"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.descripcion"
              box
              label="Descripción"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.cantidad"
              box
              label="Cantidad"
              clearable
              type="number"
            ></v-text-field>
          </v-flex>
          <v-flex class="gris" xs12 sm6>
            <v-combobox
              v-model="select"
              :items="items"
            ></v-combobox>
          </v-flex>

          <v-btn color="green darken-4" class=" white--text " >Agregar Producto</v-btn>
          <v-btn color="red darken-4" class=" white--text " >Cancelar</v-btn>

        </v-layout>
      </v-container>
    </v-form>
    <v-toolbar flat color="red darken-4">
      <v-toolbar-title class="titulo2">Inventario</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.codigo}}</td>
        <td class="text-xs-right">{{ props.item.nombre}}</td>
        <td class="text-xs-right">{{ props.item.marca }}</td>
        <td class="text-xs-right">{{ props.item.descripcion }}</td>
        <td class="text-xs-right">{{ props.item.cantidad }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data: () => ({
    dialog: false,
    search: '',
    select: 'Tipo',
    items: [
      'Producto',
      'Maquinaria'
    ],
    headers: [
      {
      },
      { text: 'codigo', value: 'codigo' },
      { text: 'producto', value: 'producto' },
      { text: 'marca', value: 'marca' },
      { text: 'descripcion', value: 'descripcion' },
      { text: 'cantidad', value: 'cantidad' },
      { text: 'valor_unitario', value: 'valor_unitario' },
      { text: 'valor_total', value: 'valor_total', sortable: false }
    ],
    codigo: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      producto: 0,
      marca: 0,
      descripcion: 0,
      cantidad: 0,
      valor_unitario: 0,
      valor_total: 0
    },
    defaultItem: {
      name: '',
      producto: 0,
      marca: 0,
      descripcion: 0,
      cantidad: 0,
      valor_unitario: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  methods: {

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }

}
</script>
<style lang="stylus" scoped>
  .subheader{
    text-align center !important
    display 4
  }
  .theme--dark.v-text-field--box > .v-input__control > .v-input__slot {
    background rgba(0,0,0,0.8)
  }
  .theme--dark.v-input:not(.v-input--is-disabled) input, .theme--dark.v-input:not(.v-input--is-disabled) textarea {
    font-size 20px
  }
  .gris {
    margin 8px 0 0 0
    background rgba(0,0,0,0.1)
    height 56px
  }
  .titulo2{
    color white !important
  }

</style>
