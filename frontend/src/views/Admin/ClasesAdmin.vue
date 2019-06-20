<template>
    <div>
      <br><br>
   <v-subheader class="subheader black--text display-1 font-weight-bold ">Clases</v-subheader>
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="editedItem.nombre"
              box
              label="Nombre de la clase"
              clearable
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm6>
            <v-combobox
              v-model="editedItem.tipo"
              :items="items2"
              box
              label="Tipo de ejercicio"
              clearable
            ></v-combobox>
          </v-flex>

          <v-flex xs12 sm4>
            <v-textarea
              v-model="editedItem.descripcion"
              box
              label="Descripción de la clase"
              clearable
              height="200px"
            ></v-textarea>
          </v-flex>

           <v-flex xs12 sm4>
          <v-textarea
              v-model="editedItem.beneficio"
              box
              label="Beneficios"
              clearable
              height="200px"
            ></v-textarea>
          </v-flex>

             <v-flex xs12 sm4>
         <v-card
      class="mx-auto"
      max-width="600"
    >
      <v-toolbar
        card
        dense
      >
        <v-toolbar-title>
          <span class="subheading">CAPACIDAD</span>
        </v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-layout
          justify-space-between
          mb-3
        >
          <v-flex text-xs-left>
            <span
              class="display-2 font-weight-light"
              v-text="bpm"
            ></span>
            <span class="subheading font-weight-light mr-1"> Personas</span>
            <v-fade-transition>
              <v-avatar
                v-if="isPlaying"
                :color="color"
                :style="{
                  animationDuration: animationDuration
                }"
                class="mb-1 v-avatar--metronome"
                size="12"
              ></v-avatar>
            </v-fade-transition>
          </v-flex>
          <v-flex text-xs-right>
            <v-btn
              :color="color"
              dark
              depressed
              fab
              @click="toggle"
              class="esfera"
            >
              <v-icon>
                {{ isPlaying ? 'mdi-pause' : 'mdi-play' }}
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-slider
          v-model="bpm"
          :color="color"
          always-dirty
          min="1"
          max="35"
        >
          <template v-slot:prepend>
            <v-icon
              :color="color"
              @click="decrement"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
              :color="color"
              @click="increment"
            >
              mdi-plus
            </v-icon>
          </template>
        </v-slider>
      </v-card-text>
    </v-card>
          </v-flex>

         <v-flex xs12 sm6>
            <material-card class="v-card-profile">
              <v-avatar class="text--center mx-auto d-block" >
                <img class="imagenq" :src="imgCode" >
              </v-avatar>
              <v-card-text class="margen text-xs-center">
                  <v-form name="formulario" method="post" enctype="form-data">
                    <v-btn class="boton"
                    @click='pickFile'
                    v-model='imageName'
                    prepend-icon='attach_file'>Selecciona imagen de la clase</v-btn>
                      <input
                      type="file"
                      style="display: none"
                      ref="image"
                      accept="image/*"
                      @change="onFilePicked">
                  </v-form>
              </v-card-text>
            </material-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-btn color="green darken-4" class="botones white--text headline" @click="save" >{{btnText}}</v-btn>
          <v-btn color="red darken-4" class="botones white--text headline" @click="resetForm">Cancelar</v-btn>
        </v-flex>
        </v-layout>
      </v-container>
    </v-form>
       <v-card>
      <v-card-title>
      <v-toolbar-title class="titulo2">Clases</v-toolbar-title>
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
      :items="type_class"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.tipoEjercicio }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.beneficio }}</td>
        <td class="text-xs-center">{{ props.item.capacidad }}</td>
        <td class="justify-center layout px-0">
          <v-btn
            class="font-weight-black white--text body-2"
            color="blue darken-1"
            @click="editItem(props.item)"
          >
            Editar
          </v-btn>
          <v-btn
            class="font-weight-black white--text body-2"
            color="red darken-4"
            @click="deleteItem(props.item)"
          >
            Eliminar
          </v-btn>
        </td>
      </template>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
         Tu busqueda para "{{ search }}" no se encontró
        </v-alert>
    </v-data-table>
    </v-card>
    </div>
</template>
<script>
import storage from '@/plugins/firebase'
import uuid from 'uuid/v4'
import api from '@/plugins/service'
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
const base64Img = 'data:image/png;base64,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'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getClass()
  },
  data: () => ({
    dialog: false,
    imgCode: base64Img,
    imageName: '',
    search: '',
    image: {
      path: '',
      url: ''
    },
    btnText: 'Agregar Clase',
    items2: [
      'Spinning',
      'Aérobicos',
      'Jaula'
    ],
    changeImg: false,
    headers: [
      {
        text: 'Titulo',
        align: 'center',
        sortable: false,
        value: 'nombre'
      },
      { text: 'Tipo de ejercicio', value: 'tipo' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Beneficios', value: 'beneficio' },
      { text: 'Capacidad', value: 'bpm' }
    ],
    editedIndex: -1,
    editedItem: {
      nombre: '',
      tipo: '',
      descripcion: '',
      beneficio: '',
      bpm: '',
      image: ''
    },
    defaultItem: {
      nombre: '',
      tipo: '',
      descripcion: '',
      beneficio: '',
      bpm: '',
      image: ''

    },
    bpm: 0,
    interval: null,
    isPlaying: false

  }),

  computed: {
    ...mapState(['type_class']),
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Editar Item'
    },
    color () {
      if (this.bpm < 6) return 'blue'
      if (this.bpm < 12) return 'teal'
      if (this.bpm < 18) return 'green'
      if (this.bpm < 24) return 'amber'
      if (this.bpm < 30) return 'orange'
      return 'red'
    },
    animationDuration () {
      return `${60 / this.bpm}s`
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    async getClass () {
      const { data: type_class } = await api.get('/type_class')
      this.$store.commit('SET_TYPE_CLASS', type_class)
    },
    resetForm () {
      this.editedItem = {}
      this.imgCode = base64Img
      this.changeImg = false
    },
    async save () {
      if (this.btnText === 'Agregar Clase') {
        if (this.changeImg) {
          const nameImg = uuid()
          const imageRef = storage.ref().child(`images/${nameImg}.jpg`)
          const imgUpload = await imageRef.putString(this.imgCode, 'data_url')
          const imageUrl = await imageRef.getDownloadURL()
          this.image = { path: imgUpload.metadata.fullPath, url: imageUrl }
        }
        const { data: type_class } = await api.post('/type_class', {
          type_classNew: {
            nombre: this.editedItem.nombre,
            tipoEjercicio: this.editedItem.tipo,
            descripcion: this.editedItem.descripcion,
            capacidad: this.bpm,
            beneficio: this.editedItem.beneficio,
            foto: this.image
          }
        })
        let clonTypeCLass = [...this.type_class]
        clonTypeCLass.push(type_class)
        this.$store.commit('SET_TYPE_CLASS', clonTypeCLass)
        this.snackbar = true
        this.resetForm()
      } else {
        if (this.changeImg) {
          const imageRef = storage.ref().child(JSON.parse(this.editedItem.foto).path)
          const imgUpload = await imageRef.putString(this.imgCode, 'data_url')
          const imageUrl = await imageRef.getDownloadURL()
          this.image = { path: imgUpload.metadata.fullPath, url: imageUrl }
        }
        const { data: type_class } = await api.put(`/type_class/${this.editedItem.uuid}`, {
          type_classUpdate: {
            nombre: this.editedItem.nombre,
            tipoEjercicio: this.editedItem.tipo,
            descripcion: this.editedItem.descripcion,
            capacidad: this.bpm,
            beneficio: this.editedItem.beneficio,
            foto: this.image
          }
        })
        let clonTypeCLass = [...this.type_class]
        clonTypeCLass[this.editedIndex] = type_class
        this.$store.commit('SET_TYPE_CLASS', clonTypeCLass)
        this.btnText = 'Agregar Clase'
        this.resetForm()
      }
    },
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      this.changeImg = true
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', async () => {
          this.imgCode = fr.result
        })
      } else {
        this.imageName = ''
        // this.imageFile = ''
        this.imageUrl = ''
      }
    },
    initialize () {
      this.type_class = [
        {
          tipo: '',
          descripcion: '',
          nombre: '',
          beneficio: '',
          bpm: '',
          image: ''

        }
      ]
    },

    editItem (item) {
      this.btnText = 'Actualizar'
      this.editedIndex = this.type_class.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.imgCode = JSON.parse(this.editedItem.foto).url
      this.dialog = true
    },

    async deleteItem (item) {
      const sw = await Swal.fire({
        title: 'Estás seguro?',
        text: `Eliminarás la clase ${item.nombre}`,
        type: 'question',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      })
      if (sw.value) {
        try {
          const { data: type_class } = await api.delete(`/type_class/${item.uuid}`)
          Swal.fire(
            'Eliminado!',
            'La clase se elimino exitosamente',
            'success'
          )
          let clonTypeCLass = [...this.type_class]
          const index = this.type_class.indexOf(item)
          clonTypeCLass.splice(index, 1)
          this.$store.commit('SET_TYPE_CLASS', clonTypeCLass)
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
    },
    decrement () {
      this.bpm--
    },
    increment () {
      this.bpm++
    },
    toggle () {
      this.isPlaying = !this.isPlaying
    }
  }
}
</script>
<style lang="stylus" scoped>
@keyframes metronome-example {
  from {
    transform: scale(.5);
  }

  to {
    transform: scale(1);
  }
}

div.v-card__title{
    background-color darkred
}

.titulo2{
    color white !important
}

.v-avatar--metronome {
  animation-name: metronome-example;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.container.fill-height {
    background-color: white;
}
.imagenq {
  width: 150px !important;
  height: 150px !important;
  margin: 0px 0px 0px -100px;
  border-radius: 0%;
}
.boton {
  margin: 110px 110px 0px 0px;
}
.botones {
  height: 70px;
  width: 300px;
  margin: 10px 0px 30px 150px;
}
.esfera{
  margin-top -5px
  height 50px
  width 50px
}
</style>
