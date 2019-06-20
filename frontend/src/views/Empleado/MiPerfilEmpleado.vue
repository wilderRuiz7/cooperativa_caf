<template>
<v-form ref="form" v-model="form">
    <v-container fluid>
      <v-layout row>
        <v-flex xs4 order-lg2>
            <v-card-text  class="transparent text-xs-center">
             <h1 class="text-xs white--text headline"><strong>FOTO DE PERFIL</strong></h1><br>
             </v-card-text>
             <br>
             <material-card class="ancho v-card-profile">
                 <v-avatar class=" text-xs-center mx-auto d-block" slot="offset">
                     <img  :src="imgUrl" class="imagen" >
                 </v-avatar>
                <v-card-text class="margen text-xs-center">
                    <v-form name="formulario" method="post" enctype="form-data">
                      <v-text-field label="Selecciona tu foto de perfil" @click='pickFile' v-model='imageName' prepend-icon='attach_file' color="green darken-4"></v-text-field>
                        <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
                    </v-form>
                </v-card-text>
            </material-card>
        </v-flex>
        <v-flex xs8 order-lg2>
            <v-card-text  class="transparent text-xs-center">
            <h1 class="text-xs- white--text headline"><strong>DATOS DE PERFIL</strong></h1><br>
             </v-card-text>
            <v-layout  row>
        <v-flex xs2 order-lg2 class="transparent text-xs-center">
          <br>
             <v-card-text><strong>Nombres :</strong></v-card-text>
        </v-flex>
        <v-flex xs4 order-lg2>
            <v-text-field small label="" v-model="nombre" color="green darken-2"></v-text-field>
        </v-flex>
          <v-flex xs2 order-lg2 class="transparent text-xs-center">
            <br>
             <v-card-text><strong>Teléfono :</strong></v-card-text>
        </v-flex>
         <v-flex xs4 order-lg2>
            <v-text-field small label="" v-model="telefono" color="green darken-2"></v-text-field>
        </v-flex>
      </v-layout>
       <v-layout row>
        <v-flex xs2 order-lg2 class="transparent text-xs-center">
          <br>
            <v-card-text><strong>Apellidos :</strong></v-card-text>
        </v-flex>
        <v-flex xs4 order-lg2>
            <v-text-field small label="" v-model="apellido" color="green darken-2"></v-text-field>
        </v-flex>
          <v-flex xs2 order-lg2 class="transparent text-xs-center">
            <br>
             <v-card-text><strong>Dirección :</strong></v-card-text>
        </v-flex>
        <v-flex xs4 order-lg2>
            <v-text-field small label="" v-model="direccion" color="green darken-2"></v-text-field>
        </v-flex>
      </v-layout>
       <v-layout row>
        <v-flex xs2 order-lg2 class="transparent text-xs-center">
          <br>
             <v-card-text><strong>CC / TI :</strong></v-card-text>
             <br>
        </v-flex>
        <v-flex xs4 order-lg2>
            <v-text-field small label="" v-model="cedula" color="green darken-2"></v-text-field>
        </v-flex>
          <v-flex xs2 order-lg2 class="transparent text-xs-center">
            <br>
             <v-card-text><strong>Ciudad :</strong></v-card-text>
        </v-flex>
        <v-flex xs4 order-lg2>
            <v-text-field small label="" v-model="ciudad" color="green darken-2"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs2 order-lg2 class="transparent text-xs-center">
          <br>
             <v-card-text><strong>Género:</strong></v-card-text>
             <br>
        </v-flex>
        <v-flex xs4 order-lg2>
          <v-combobox
          v-model="genero"
          :items="items"
          color="green darken-4"
        ></v-combobox>
        </v-flex>
          <v-flex xs2 order-lg2 class="transparent text-xs-center">
            <br>
             <v-card-text><strong>Edad :</strong></v-card-text>
        </v-flex>
        <v-flex xs4 order-lg2>
            <v-text-field small label="" v-model="edad" color="green darken-2"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs2 order-lg2 class="transparent text-xs-center">
             <v-card-text><strong>Editar E-mail :</strong></v-card-text>
        </v-flex>
        <v-flex xs4 order-lg2>
             <v-dialog v-model="dialogEmail" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn block dark v-on="on" class="boton" flat></v-btn>
          </template>
          <v-card class="contenido">
            <v-card-title>
              <span class="headline">Editar e-mail</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                <v-flex xs12>
                    <v-text-field label="Email actual*" required color="green darken-2"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Email nuevo*" required color="green darken-2"></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="confirma Email nuevo*" required color="green darken-2"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>Verifique que tidos los datos esten escritos correctamente</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" flat @click="dialogEmail = false">Cancelar</v-btn>
              <v-btn color="white" flat @click="dialogEmail = false">Guardar cambios</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-flex>
          <v-flex xs2 order-lg2 class="transparent text-xs-center">
              <v-card-text><strong>Editar Contraseña :</strong></v-card-text>
        </v-flex>
        <v-flex xs4 order-lg2>
                  <v-dialog v-model="dialogPassword" persistent max-width="600px">
        <template v-slot:activator="{ on }">
        <v-btn block dark v-on="on" class="boton" flat></v-btn>
        </template>
        <v-card class="contenido">
          <v-card-title>
            <span class="headline">Contraseña de Usuario</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Escribe tu contraseña actual*" required  :type="show1 ? 'text' : 'password'" :append-icon="show1 ? 'visibility' : 'visibility_off'" @click:append="show1 = !show1" color="green darken-2"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Escribe tu contraseña nueva*" required  :type="show2 ? 'text' : 'password'" :append-icon="show2? 'visibility' : 'visibility_off'" @click:append="show2 = !show2" color="green darken-2"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Confirma tu contraseña nueva*" required  :type="show3 ? 'text' : 'password'" :append-icon="show3 ? 'visibility' : 'visibility_off'" @click:append="show3 = !show3" color="green darken-2"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
           <small>Verifique que tidos los datos esten escritos correctamente</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="white" flat @click="dialogPassword = false">Cancelar</v-btn>
            <v-btn color="white" flat @click="dialogPassword = false">Guardar cambios</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
        </v-flex>

      </v-layout>
        </v-flex>
      </v-layout>
      <br>
        <v-divider> </v-divider>
        <br><br>
        <v-layout  row>
              <v-flex d-flex xs12 sm6 md3>
        </v-flex>
        <v-flex d-flex xs12 sm6 md5  class="transparent text-xs-center">
     <v-card-actions>
        <v-btn @click="resetForm">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          class="white--text"
          :enabled="!formIsValid"
          color="blue darken-4"
          type="submit"
        >Guardar cambios</v-btn>
      </v-card-actions>
        </v-flex>
      </v-layout>
    </v-container>
</v-form>
</template>
<script>
export default {
  data: () => ({
    imgUrl: 'data:image/png;base64,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',
    imageName: '',
    dialogEmail: false,
    dialogPassword: false,
    nombre: '',
    telefono: '',
    apellido: '',
    direccion: '',
    ciudad: '',
    cedula: '',
    genero: '',
    items: [
      'Femenino',
      'Masculino'
    ],
    edad: '',
    form: false,
    show1: false,
    show2: false,
    show3: false
  }),
  methods: {
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
        fr.addEventListener('load', () => {
          this.imgUrl = fr.result
          // this.imageFile = files[0] // this is an image file that can be sent to server...
        })
      } else {
        this.imageName = ''
        // this.imageFile = ''
        this.imageUrl = ''
      }
    }
  },
  resetForm () {
    this.form = Object.assign({}, this.defaultForm)
    this.$refs.form.reset()
  },
  submit () {
    this.snackbar = true
    this.resetForm()
  }
}
</script>

<style lang="stylus" scoped>
.contenido{
  padding 30px
}
.boton{
  border-bottom solid 1px grey
}
.ancho{
  width 120px!important
}
.imagen{
  width 130px !important
  height 150px !important
  margin -20px 0px 0px -40px
}
.margen{
  margin 80px 0px
}
</style>
