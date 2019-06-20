<template>
  <div>
    <v-card flat>
      <br><br>
    <h1 class="text-xs-center black--text display-1">REGÍSTRATE CON <strong>NOSOTROS</strong></h1><br>
    </v-card>
     <v-card flat>
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="blue darken-4"
    >
      <span>Registro exitoso!</span>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <v-container grid-list-xl fluid>
        <v-layout wrap>
           <v-flex d-flex xs12 sm12 md3>
           </v-flex>
          <v-flex d-flex xs12 sm12 md6>
            <h1 class="text-xs-left black--text headline font-italic">CREA TU <strong>CUENTA</strong></h1><br>
          </v-flex>
          <v-flex d-flex xs12 sm12 md3>
           </v-flex>
           <v-flex d-flex xs12 sm12 md3>
           </v-flex>
          <v-flex d-flex xs12 sm12 md6>
            <v-card class="elevation-12">
               <v-toolbar color="blue darken-4" height="150">
                    <img src="../../assets/lofo-fondo-blanco.png" alt="" >
                <v-toolbar-title class="font-weight-medium white--text display-1">Chon's Gym</v-toolbar-title>
                </v-toolbar>
                  <v-card-text class="contenedor white">
                <v-form class="black--text">
         <v-text-field
           v-model="email"
           color="blue darken-4"
           label="Correo electrónico"
           :error-messages="emailError"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
              v-model="password"
              color="blue darken-4"
              label="Contraseña"
              :error-messages="passErrors"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
             :type="show1 ? 'text' : 'password'"
             :append-icon="show1 ? 'visibility' : 'visibility_off'"
             @click:append="show1 = !show1"
              required
            ></v-text-field>
              <v-text-field
                v-model="repeatPassword"
                :error-messages="matchPass"
                @input="$v.repeatPassword.$touch()"
                @blur="$v.repeatPassword.$touch()"
                color="blue darken-4"
                label="Confirmar contraseña"
                :type="show2 ? 'text' : 'password'"
                :append-icon="show2 ? 'visibility' : 'visibility_off'"
                @click:append="show2 = !show2"
                required
              ></v-text-field>
            </v-form>
              </v-card-text>
              <v-checkbox
                  v-model="terminos"
                  :error-messages="checkboxErrors"
                  color="blue darken-3"
                  class="caja"
                  @change="$v.terminos.$touch()"
                  @blur="$v.terminos.$touch()"
              >
                <template v-slot:label>
                  Acepto los&nbsp;
                  <a href="#" @click.stop.prevent="dialog = true">Términos</a>
                  &nbsp;y&nbsp;
                  <a href="#" @click.stop.prevent="dialog = true">Condiciones</a>*
                </template>
              </v-checkbox>
      <v-card-actions class="botones">
        <v-btn class="font-weight-black title font-italic" flat @click="resetForm">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialogEmail" persistent max-width="600px">
          <template v-slot:activator="{ on }">
         <v-btn
          v-on="on"
          flat
          color="blue darken-4"
          type="submit"
          class="font-weight-black title font-italic"
          :disabled="$v.$invalid"
        >Registrarse</v-btn>
        </template>
          <v-card class="contenido">
            <v-card-title>
              <span class="headline">¿Desea completar el registro?</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-4" flat @click="dialogEmail = false" class="title" to="/planes-cliente">Omitir</v-btn>
              <v-btn color="blue darken-4" flat @click="dialogEmail = false" class="title" to="/editar-perfil-cliente"> Si</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-dialog
      v-model="dialog"
      absolute
      max-width="800"
      persistent>
       <v-card>
        <v-card-title class="headline grey lighten-3">Políticas de privacidad</v-card-title>
        <v-card-text>
          <span class="text-xs black--text subheading justify">La protección y el buen manejo de la información personal de sus afiliados son muy importantes para el Gimnasio Chon's Gym, por cuanto las mismas le permiten atender de mejor manera las necesidades que ellos tienen, así como cumplir con las obligaciones a su cargo. Es por ello que el Gimnasio Chon's Gym ha diseñado políticas y procedimientos que en conjunto con la presente autorización permiten hacer uso de sus datos personales conforme a la ley. Así, lo invitamos a leer cuidadosamente el siguiente texto, mediante el cual autoriza el tratamiento de su información personal.</span>
        <p></p>
        <span class="text-xs black--text subheading justify">1. En relación con mis Datos Personales: Mediante este documento, en mi calidad de titular de la información o representante legal del mismo, autorizo al Gimnasio Chon's Gym a dar tratamiento a mis datos personales para: </span>
        <p></p>
        <span class="text-xs black--text subheading justify">a) El desarrollo de su objeto social y de la relación contractual que nos vincula, lo que supone el ejercicio de sus derechos y deberes dentro de los que están, sin limitarse a ellos, la atención de mis solicitudes, la generación de estados de cuenta, la realización de actividades de cobranza, entre otros. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">b) La administración de los productos o servicios comercializados a través del Gimnasio Chon's Gym de los que soy titular </span>
        <p></p>
        <span class="text-xs black--text subheading justify">c) La estructuración de ofertas comerciales y la remisión de información comercial sobre productos y/o servicios a través de los canales o medios que el Gimnasio Chon's Gym establezca para tal fin.  </span>
        <p></p>
        <span class="text-xs black--text subheading justify">d) La adopción de medidas tendientes a la prevención de actividades ilícitas. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">La presente autorización se hace extensiva a quien represente los derechos del Gimnasio Chon's Gym, a quien éste contrate para el ejercicio de los mismos o a quien éste ceda sus derechos, sus obligaciones o su posición contractual a cualquier título, en relación con los productos o servicios de los que soy titular. Así mismo, a las Entidades que forman parte de la Organización y a los terceros con quien el Gimnasio Chon's Gym o esas Entidades establezcan alianzas comerciales, a partir de las cuales se ofrezcan productos o servicios que puedan ser de su interés. </span>
        <p></p>
        <span class="text-xs black--text subheading justify">Esta autorización permanecerá vigente, hasta tanto sea revocada y podrá ser revocada en los eventos previstos en la ley, y siempre y cuando no exista ningún tipo de relación con el Gimnasio Chon's Gym o no se encuentre vigente algún producto o servicio derivado de esta autorización.</span>
        <p></p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            flat
            @click="agreement = false, dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="blue darken-3"
            @click="agreement = true, dialog = false"
          >
            Acepto
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card>
    <br><br> <br>
</div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, sameAs, minLength, email, requiredIf } from 'vuelidate/lib/validators'

import api from '@/plugins/service'
export default {
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      isLoading: false,
      allowSpaces: false,
      dialog: false,
      dialogEmail: false,
      show1: false,
      show2: false,
      gender: ['M', 'F'],
      conditions: false,
      content: 'Bienvenido a chon´s-Gym',
      snackbar: false,
      terminos: false
    }
  },
  mixins: [validationMixin],
  validations: {
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    email: {
      required,
      email
    },
    terminos: {
      checked (val) {
        return val
      }
    }
  },
  created () {
    this.getUsers()
  },
  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.terminos.$dirty) return errors
      !this.$v.terminos.checked && errors.push('debes aceptar terminos y condiciones')
      return errors
    },
    passErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.minLength) {
        errors.push('Contraseña debe tener mínimo 8 caracteres')
        return errors
      }
      if (!this.$v.password.required) {
        errors.push('Contraseña requerida')
        return errors
      }
      return errors
    },
    matchPass () {
      const errors = []
      if (!this.$v.repeatPassword.$dirty) return errors
      !this.$v.repeatPassword.sameAsPassword && errors.push('Contraseñas no coinciden')
      return errors
    },
    emailError () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('E-mail invalido')
      !this.$v.email.required && errors.push('E-mail es requerido')
      return errors
    }
  },
  methods: {
    async getUsers () {
      const res = await api.get('/user')
    },
    resetForm () {
      this.$refs.form.reset()
    },
    async submit () {
      const res = await api.post('/user',
        {
          userNew: {
            email: this.email,
            password: this.password
          }
        })
      this.snackbar = true
      this.resetForm()
    }
  }
}
</script>
<style lang="stylus" scoped>
.contenedor{
  padding 30px 50px 0px 50px
}
.caja{
  margin-left 240px
}
.botones{
  padding 0px 30px 30px 30px
}
.contenido{
  padding 30px
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
