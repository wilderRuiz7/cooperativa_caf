<template>
    <div>
   <v-subheader class="subheader black--text display-1 font-weight-bold ">Ventas</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.codigo"
              box
              label="Número de serial o codigo"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.name"
              box
              label="Nombre del Producto"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field
              v-model="editedItem.cantidad"
              box
              label= "Cantidad"
              clearable
              type="number"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.cedula"
              box
              label="Cedula Cliente"
              clearable
            ></v-text-field>
          </v-flex>

           <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.empleado"
              box
              label="Empleado"
              clearable
            ></v-text-field>
          </v-flex>
          <v-btn color="red darken-4" class=" white--text title" >Cancelar</v-btn>
          <v-btn color="green darken-4" class=" white--text title" @click="save" >Agregar Producto</v-btn>
        </v-layout>
      </v-container>
    </v-form>
     <v-toolbar flat color="white">
      <v-divider
        class="mx-1"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.codigo" label="Serial"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.calories" label="Cantidad"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.cedula" label="Cedula"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.empleado" label="Empleado"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.codigo }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.cantidad }}</td>
        <td class="text-xs-left">{{ props.item.cedula }}</td>
        <td class="text-xs-left">{{ props.item.empleado }}</td>
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
    </v-data-table>

    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'empleado-layout')
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Codigo',
        align: 'center',
        sortable: false,
        value: 'name'
      },
      { text: 'Nombre', value: 'name' },
      { text: 'Cantidad', value: 'cantidad' },
      { text: 'Cédula', value: 'cedula' },
      { text: 'Empleado', value: 'empleado' }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      codigo: '',
      cantidad: '',
      cedula: '',
      empleado: ''
    },
    defaultItem: {
      name: '',
      codigo: '',
      cantidad: '',
      cedula: '',
      empleado: ''

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
    initialize () {
      this.desserts = [
        {
          name: '',
          codigo: '',
          cantidad: '',
          cedula: '',
          empleado: ''
        }
      ]
    },

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
.container.fill-height {
    background-color: white;
}

</style>
