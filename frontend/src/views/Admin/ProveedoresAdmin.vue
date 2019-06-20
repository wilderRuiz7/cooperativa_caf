<template>
  <div>
    <v-subheader class="subheader black--text display-1 font-weight-bold" >Registro de Proveedores</v-subheader>
    <v-form ref="form">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.nombre"
              box
              :rules="rules.nombre"
              label="Nombres*"
              clearable
              type="text"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.apellido"
              box
              :rules="rules.apellido"
              label="Apellidos*"
              type="text"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.cedula"
              box
              :rules="rules.cedula"
              label= "No. Documento*"
              clearable

            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.telefono"
              box
              :rules="rules.telefono"
              label="Teléfono*"
              clearable
              mask="phone"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.direccion"
              box
              :rules="rules.direccion"
              label="Dirección*"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.email"
              :rules="rules.email"
              label="Correo electrónico*"
              box
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.empresa"
              box
              :rules="rules.empresa"
              label="Empresa*"
              clearable
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.password"
              box
              :rules="rules.password"
              label="Password*"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              @click:append="show = !show"
              clearable
              v-show="a"
            ></v-text-field>
          </v-flex>
          <v-btn color="green darken-4" class=" buton white--text "  @click="save" >{{ buttonText }}</v-btn>
          <v-btn color="red darken-4" class=" buton  white--text " @click="resetForm" >Cancelar</v-btn>
        </v-layout>
      </v-container>

    </v-form>
    <v-card>
      <v-card-title>
      <v-toolbar-title class="titulo2">Proveedores</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          class="white--text"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
      >
        <template v-slot:items="props">
          <td></td>
          <td class="text-xs-center">{{ props.item.cedula }}</td>
          <td class="text-xs-center">{{ props.item.nombre }}</td>
          <td class="text-xs-center">{{ props.item.apellido }}</td>
          <td class="text-xs-center">{{ props.item.telefono }}</td>
          <td class="text-xs-center">{{ props.item.direccion }}</td>
          <td class="text-xs-center">{{ props.item.email }}</td>
          <td class="text-xs-center">{{ props.item.empresa }}</td>
          <td class="justify-center layout px-0">
            <v-btn
              class="font-weight-black white--text body-2"
              color="blue darken-1"
              @click="editItem(props.item)"
            >Editar</v-btn>
            <v-btn
              class="font-weight-black white--text body-2"
              color="red darken-1"
              @click="deleteItem(props.item)"
            >Eliminar</v-btn>
          </td>
        </template>
        <v-alert v-slot:no-results :value="true" color="error" icon="warning">
         Tu busqueda para "{{ search }}" no se encontro
        </v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import uuid from 'uuid/v4'
import Swal from 'sweetalert2'
import api from '@/plugins/service'
export default {

  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getUsers()
  },
  data () {
    return {
      a: true,
      dialog: false,
      show: false,
      buttonText: 'Registrar Proveedor',
      rules: {
        email: [v => (v || '').match(/@/) || 'Por favor ingrese su e-mail'],
        nombre: [v => !!v || 'El nombre es requerido'],
        apellido: [v => !!v || 'Los apellidos son requeridos'],
        telefono: [v => !!v || 'EL telefono es requerido'],
        direccion: [v => !!v || 'La dirección es requerida'],
        empresa: [v => !!v || 'La empresa es requerida'],
        cedula: [v => !!v || 'El documento es requerido'],
        password: [v => !!v || 'La contraseña requerida']

      },
      search: '',
      headers: [
        {
          align: 'left',
          sortable: false
        },
        { text: 'Documento', value: 'cedula' },
        { text: 'Nombres', value: 'nombre' },
        { text: 'Apellidos', value: 'apellido' },
        { text: 'Telefono', value: 'telefono' },
        { text: 'Direccion', value: 'direccion' },
        { text: 'Correo Electronico', value: 'email' },
        { text: 'Empresa', value: 'empresa' }
      ],
      editedIndex: -1,
      editedItem: {
        cedula: '',
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: '',
        email: '',
        empresa: '',
        password: ''
      },
      defaultItem: {
        cedula: '',
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: '',
        email: '',
        empresa: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(['users'])
  },

  methods: {
    async getUsers () {
      const { data: users } = await api.get('/user')
      this.$store.commit('SET_USERS', users)
    },
    resetForm () {
      this.editedItem = {}
    },
    async save () {
      const alert = await Swal.fire({
        title: 'El proveedor se ha registrado',
        timer: 3000
      })
      if (this.buttonText === 'Registrar Proveedor') {
        const { data: user } = await api.post('/user',
          {
            userNew: {
              nombre: this.editedItem.nombre,
              apellido: this.editedItem.apellido,
              email: this.editedItem.email,
              cedula: this.editedItem.cedula,
              telefono: this.editedItem.telefono,
              empresa: this.editedItem.empresa,
              direccion: this.editedItem.direccion,
              password: this.editedItem.password,
              rol: 'proveedor'
            }
          })
        let clonUsers = [...this.users]
        clonUsers.push(user)
        this.$store.commit('SET_USERS', clonUsers)
        this.snackbar = true
        this.resetForm()
      } else {
        const { data: user } = await api.put(`/user/${this.editedItem.uuid}`,
          {
            userUpdate: {
              nombre: this.editedItem.nombre,
              apellido: this.editedItem.apellido,
              email: this.editedItem.email,
              cedula: this.editedItem.ceedula,
              telefono: this.editedItem.telefono,
              empresa: this.editedItem.empresa,
              direccion: this.editedItem.direccion,
              password: this.editedItem.password
            }
          })
        let clonUsers = [...this.users]
        clonUsers[this.editedIndex] = user
        this.$store.commit('SET_USERS', clonUsers)
        this.buttonText = 'Registrar Proveedor'
        this.resetForm()
      }
    },
    initialize () {
      this.users = [
        {
          documento: '',
          nombres: '',
          apellidos: '',
          telefono: '',
          direccion: '',
          email: '',
          password: '',
          empresa: ''
        }
      ]
    },
    editItem (item) {
      this.buttonText = 'Actualizar'
      this.a = false
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    async deleteItem (item) {
      const sw = await Swal.fire({
        title: 'Estas seguro?',
        text: `Eliminaras el Proveedor ${item.nombre}`,
        type: 'question',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      })
      if (sw.value) {
        try {
          const { data: user } = await api.delete(`/user/${item.uuid}`)
          Swal.fire(
            'Eliminado!',
            'El proveedor se eliminó exitosamente',
            'success'
          )
          let clonUsers = [...this.users]
          const index = this.users.indexOf(item)
          clonUsers.splice(index, 1)
          this.$store.commit('SET_USERS', clonUsers)
        } catch (error) {
          console.error(error)
        }
      }
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  }
}
</script>
<style lang="stylus" scoped>

  div.v-card__title{
    background-color darkred
  }
  .titulo2{
    color white !important
  }
  .headline{
    color white
  }
  .buton{
    height 55px
    font-size 20px
  }
</style>
