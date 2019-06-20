<template>
  <div>
    <br>
    <br>
    <v-subheader class="subheader black--text display-1 font-weight-bold">DIETA</v-subheader>
    <v-form ref="form">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-text-field v-model="editedItem.Rutina" box label="Rutinas de comida" clearable></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-text-field v-model="editedItem.hora" box label="Hora" clearable></v-text-field>
          </v-flex>

          <v-flex xs12 sm4>
            <v-combobox
              v-model="editedItem.dia"
              :items="items"
              box
              label="Día de la semana"
              clearable
            ></v-combobox>
          </v-flex>

          <v-flex xs12 sm6>
            <v-textarea v-model="editedItem.descripcion" box label="Descripción" clearable></v-textarea>
          </v-flex>

          <v-flex xs12 sm6>
            <v-textarea v-model="editedItem.beneficio" box label="Beneficios" clearable></v-textarea>
          </v-flex>
          <v-flex xs12 sm6>
            <material-card class="v-card-profile">
              <v-avatar class="text--center mx-auto d-block">
                <img class="imagenq" :src="imgCode">
              </v-avatar>
              <v-card-text class="margen text-xs-center">
                <v-form name="formulario" method="post" enctype="form-data">
                  <v-btn
                    class="boton"
                    @click="pickFile"
                    v-model="imageName"
                    prepend-icon="attach_file"
                  >Selecciona imagen del plan</v-btn>
                  <input
                    type="file"
                    style="display: none"
                    ref="image"
                    accept="image/*"
                    @change="onFilePicked"
                  >
                </v-form>
              </v-card-text>
            </material-card>
          </v-flex>
          <v-flex xs12 sm6>
            <v-btn
              color="green darken-4"
              class="botones white--text headline"
              @click="save"
            >{{ btnText }}</v-btn>
            <v-btn
              color="red darken-4"
              class="botones white--text headline"
              @click="resetForm"
            >Cancelar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-data-table :headers="headers" :items="diet" class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.Rutina }}</td>
        <td class="text-xs-left">{{ props.item.hora }}</td>
        <td class="text-xs-left">{{ props.item.dia }}</td>
        <td class="text-xs-left">{{ props.item.descripcion }}</td>
        <td class="text-xs-left">{{ props.item.beneficio }}</td>
        <td class="text-xs-left">{{ props.item.image }}</td>
        <td class="justify-center layout px-0">
          <v-btn
            class="font-weight-black white--text body-2"
            color="blue darken-1"
            @click="editItem(props.item)"
          >Editar</v-btn>
          <v-btn
            class="font-weight-black white--text body-2"
            color="red darken-4"
            @click="deleteItem(props.item)"
          >Eliminar</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import storage from '@/plugins/firebase'
import uuid from 'uuid/v4'
import api from '@/plugins/service'
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
const base64Img =
  'data:image/png;base64,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'
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
    this.getDiets()
  },
  data: () => ({
    dialog: false,
    imgCode: base64Img,
    imageName: '',
    image: '',
    btnText: 'Agregar Dieta',
    headers: [
      {
        text: 'Rutina',
        align: 'center',
        sortable: false,
        value: 'nombre'
      },
      { text: 'Hora', value: 'Hora' },
      { text: 'Día', value: 'día' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Beneficios', value: 'beneficio' },
      { text: 'Imagen', value: 'image' }
    ],
    editedIndex: -1,
    editedItem: {
      hora: '',
      descripcion: '',
      beneficio: '',
      Rutina: '',
      dia: '',
      image: ''
    },
    defaultItem: {
      hora: '',
      descripcion: '',
      beneficio: '',
      Rutina: '',
      dia: '',
      image: ''
    }
  }),

  computed: {
    ...mapState(['diets']),
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Editar Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  methods: {
    async getDiets () {
      const { data: diets } = await api.get('/diet')
      this.$store.commit('SET_DIETS', diet)
    },
    resetForm () {
      this.editedItem = {}
      this.imgCode = base64Img
    },
    async save () {
      if (this.btnText === 'Agregar Dieta') {
        const nameImg = uuid()
        const imageRef = storage.ref().child(`images/${nameImg}.jpg`)
        const imgUpload = await imageRef.putString(this.imgCode, 'data_url')
        const imageUrl = await imageRef.getDownloadURL()
        this.image = { path: imgUpload.metadata.fullPath, url: imageUrl }
        const { data: diets } = await api.post('/diet', {
          dietsNew: {
            Rutina: this.editedItem.rutina,
            descripcion: this.editedItem.descripcion,
            hora: this.editedItem.hora,
            dia: this.editedItem.dia,
            beneficio: this.editedItem.beneficio,
            foto: this.image
          }
        })
        let clonDieta = [...this.diets]
        clonDieta.push(diet)
        this.$store.commit('SET_DIETS', clonDieta)
        this.snackbar = true
        this.resetForm()
      } else {
        const imageRef = storage
          .ref()
          .child(JSON.parse(this.editedItem.foto).path)
        const imgUpload = await imageRef.putString(this.imgCode, 'data_url')
        const imageUrl = await imageRef.getDownloadURL()
        this.image = { path: imgUpload.metadata.fullPath, url: imageUrl }
        const { data: diet } = await api.put(`/diet/${this.editedItem.uuid}`, {
          dietaaUpdate: {
            Rutina: this.editedItem.rutina,
            dia: this.editedItem.dia,
            descripcion: this.editedItem.descripcion,
            hora: this.editedItem.hora,
            beneficio: this.editedItem.beneficio,
            foto: this.image
          }
        })
        let clonDieta = [...this.diets]
        clonDieta[this.editedIndex] = diet
        this.$store.commit('SET_DIETS', clonDieta)
        this.btnText = 'Agregar Dieta'
        this.resetForm() 
      }
    },
    pickFile () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
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
      this.dieta = [
        {
          Rutina: '',
          hora: '',
          descripcion: '',
          dia: '',
          beneficio: '',
          image: ''
        }
      ]
    },

    editItem (item) {
      this.btnText = 'Actualizar'
      this.editedIndex = this.dieta.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.imgCode = JSON.parse(this.editedItem.foto).url
      this.dialog = true
    },

    async deleteItem (item) {
      const sw = await Swal.fire({
        title: 'Estas seguro?',
        text: `Eliminaras dieta ${item.nombre}`,
        type: 'question',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
      })
      if (sw.value) {
        try {
          const { data: diet } = await api.delete(`/diet/${item.uuid}`)
          Swal.fire(
            'Eliminado!',
            'La dieta se elimino exitosamente',
            'success'
          )
          let clonDieta = [...this.dieta]
          const index = this.dieta.indexOf(item)
          clonDieta.splice(index, 1)
          this.$store.commit('SET_DIETA', clonDieta)
        } catch (error) {
          console.error(error)
        }
      }
      // const { data: dieta } = await api.delete(`/dieta/${item.uuid}`)
      // const index = this.diet.indexOf(item)
      // confirm('¿Estás seguro que deseas elimiar este plan?') && this.diet.splice(index, 1)
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
</style>
