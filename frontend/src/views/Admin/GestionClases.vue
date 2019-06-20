<template>
<div class="margin">
  <v-subheader class="subheader black--text display-1 font-weight-bold ">Gestión de reservas</v-subheader>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
    <v-layout>
      <v-flex xs6>
        <v-text-field
          label="Nombre de la clase"
          clearable
          box
        ></v-text-field>
            <v-menu
        ref="nowMenu"
        v-model="nowMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="now"
        transition="scale-transition"
        min-width="290px"
        lazy
        offset-y
        full-width
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="now"
            label="Fecha"
            box
            readonly
            v-on="on"
            color="red darken-4"
          ></v-text-field>
        </template>
        <v-date-picker
          locale="es"
          v-model="now"
          no-title
          scrollable
          color="red darken-4"
        >
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="red darken-4"
            @click="nowMenu = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            flat
            color="red darken-4"
            @click="$refs.nowMenu.save(now)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-flex>
          <v-textarea
            name="input-7-1"
            label="Descripción de la clase"
            value=""
            box
            required
          ></v-textarea>
        </v-flex>
      </v-flex>
        <v-flex xs6>
        <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="time"
          persistent
          lazy
          full-width
          width="300px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="time"
               box
              label="Hora de Inicio"
              prepend-icon="access_time"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="modal2"
            v-model="time"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal2 = false">Cancelar</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
          </v-time-picker>
        </v-dialog>
        <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="time"
          persistent
          lazy
          full-width
          width="300px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="time"
              label="Hora de Fin"
              prepend-icon="access_time"
              readonly
               box
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="modal2"
            v-model="time"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal2 = false">Cancelar</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
          </v-time-picker>
        </v-dialog>
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
          <v-btn
        color="success"
        @click="validate"
      >
       Crear clase
      </v-btn>

      <v-btn
        color="error"
        @click="reset"
      >
        Borrar Datos
      </v-btn>
      </v-flex>
    </v-layout>

    </v-form>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data: () => ({
    menu2: false,
    select: null,
    today: '2019-01-08',
    nowMenu: false,
    now: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    time: null,
    modal2: false,
    picker: new Date().toISOString().substr(0, 10)
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style lang="stylus" scoped>
  .margin{
    margin 20px
  }
</style>
