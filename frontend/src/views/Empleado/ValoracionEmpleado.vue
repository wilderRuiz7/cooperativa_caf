<template>
    <div>
      <v-container>
        <v-text-field
                v-model="message4"
                box
                label="Digite el numero de documento"
                clearable
        ></v-text-field>
        <v-toolbar flat color="white">
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-2"
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
                    <v-text-field v-model="editedItem.name" label="Codigo"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.calories" label="Cedula"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.fat" label="Nombres"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.carbs" label="Apellidos"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.protein" label="Telefono"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white--text" flat @click="close">Cancel</v-btn>
              <v-btn color="white--text" flat @click="save">Save</v-btn>
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
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
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
      </v-container>
      <v-form>
      <v-container>
        <h1>Test de valoracion</h1>
        <v-layout row wrap>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message1"
              box
              label="Edad*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message2"
              box
              label="Peso*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message3"
              box
              label= "Estatura*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message4"
              box
              label="Tiene algun problema cardiovascular*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message5"
              box
              label="Toma algun tipo de medicamento*"
              clearable
            ></v-text-field>

          </v-flex>

           <v-flex xs12 sm6>
            <v-text-field
              v-model="message5"
              box
              label="Frecuencia Cardiaca*"
              clearable
            ></v-text-field>

          </v-flex>

         <v-flex xs12 sm6>
             <label>Consume tabaco</label>
            <v-checkbox v-model="checkbox1" :label="`Si: ${checkbox1.toString()}`"></v-checkbox>
            <v-checkbox v-model="checkbox2" :label="`No: ${checkbox2.toString()}`"></v-checkbox>
          </v-flex>
          <v-flex xs12 sm6>
             <label>Consume Alcohol</label>
            <v-checkbox v-model="checkbox1" :label="`Si: ${checkbox1.toString()}`"></v-checkbox>
            <v-checkbox v-model="checkbox2" :label="`No: ${checkbox2.toString()}`"></v-checkbox>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message6"
              box
              label="Grasa corporal (%)"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="message7"
              box
              label="Grasa Magra (kg)"
              clearable
            ></v-text-field>
          </v-flex>
          </v-layout>
          </v-container>
       </v-form>

          <v-btn color="green darken-4" class=" white--text display-1" >Imprimir</v-btn>
          <v-btn color="red darken-4" class=" white--text display-1" >Guaradar</v-btn>

    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'empleado-layout')
  },
  data () {
    return {
      select: 'Masaje',
      items: [
        'Masaje',
        'Hidroterapia',
        'Plan 1 mes',
        'Plan 3 meses'
      ],
      checkbox1: true,
      checkbox2: false,
      dialog: false,
      headers: [
        {
          text: 'Codigo',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Cedula', value: 'calories' },
        { text: 'Nombres', value: 'fat' },
        { text: 'Apellidos', value: 'carbs' },
        { text: 'Telefono', value: 'protein' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }
  },
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
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
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
.theme--dark.v-label{
  color white
}
.v-checkbox{
  display inline-block !iportant
}
.theme--dark.v-sheet {
    background-color: darkgreen;
}
</style>
