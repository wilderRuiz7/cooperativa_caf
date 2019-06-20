<template>
<div class="imagen_recibo">
  <img class="imagen_icon" src="../../assets/Logo-gym.png" alt="">
<v-layout row wrap>
    <form>
      <v-flex xs14 sm14>
        <v-select
      v-model="select"
      :items="items"
      :error-messages="Errors"
      label="tipo de membresia"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
     <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="usuario"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="pago_efectuado"
      :error-messages="emailErrors"
      label="Pago efectuado"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
     <v-text-field
      v-model="pago_efectuado"
      :error-messages="Errors"
      label="fecha"
      required
    ></v-text-field>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="tipo de pago"
      required
    ></v-text-field>
     <v-checkbox
      v-model="checkbox"
      :error-messages="Errors"
      label="Registrar membresia?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
      </v-flex>
  </form>
  </v-layout>
  </div>
</template>
<script>

import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'empleado-layout')
  },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      }
    }
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      'Semanal',
      'Quincenal',
      'Mensual',
      'Trimestral',
      'Anual',
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('required.')

      !this.$v.name.required && errors.push('Name is required.')

      return errors
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')

      !this.$v.email.required && errors.push('required')

      !this.$v.email.required && errors.push('E-mail is required')

      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>
<style lang="stylus" scoped>
form{
  margin-left 380px
}
.v-content__wrap{
  background-image url('')
}
.imagen_recibo{
      background-image url('../../assets/portadamembresia.jpg') !important
      margin-top -14px
}
img.imagen_icon{
  width 80px !important
  height 80px !important
}
label{
  background-color black
}
</style>
