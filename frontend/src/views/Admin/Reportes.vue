<template>
    <div class="grande">
      <v-subheader class="subheader black--text display-1 font-weight-bold" xs8>Reportes</v-subheader>

      <v-container class="ancho" fluid>
        <p class="titulo white--text display-1" >Generar Reportes</p>
        <v-layout row>
          <v-flex xs4 >
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-checkbox v-model="selected" label="Clientes" value="Clientes"></v-checkbox>
              <v-checkbox v-model="selected" label="Horarios" value="Horarios"></v-checkbox>
              <v-checkbox v-model="selected" label="Membresias" value="Membresias"></v-checkbox>
            </v-radio-group>
          </v-flex>
          <v-flex xs4>
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-checkbox v-model="selected" label="Entrenadores" value="Entrenadores"></v-checkbox>
              <v-checkbox v-model="selected" label="Ventas" value="Ventas"></v-checkbox>
              <v-checkbox v-model="selected" label="Compras" value="Compras"></v-checkbox>
            </v-radio-group>
          </v-flex>
          <v-flex xs4>
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-checkbox v-model="selected" label="Reservas" value="Reservas"></v-checkbox>
              <v-checkbox v-model="selected" label="Inventario" value="Inventario"></v-checkbox>
              <v-checkbox v-model="selected" label="Progreso" value="Progreso"></v-checkbox>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <p class="titulo1 white--text" >Generar Reporte(s) en:</p>
        <v-layout row>
          <v-flex xs4 >
              <v-radio-group class="Layout" v-model="radios" :mandatory="false">
                <v-radio label="PDF" value="pdf"></v-radio>
              </v-radio-group>
          </v-flex>
          <v-flex xs4 >
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-radio label="EXCEL" value="excel"></v-radio>
            </v-radio-group>
          </v-flex>
          <v-flex xs4 >
            <v-radio-group class="Layout" v-model="radios" :mandatory="false">
              <v-btn
                color="red darken-4"
                class="botton"
                @click="loader = 'loading3'"
               >Generar<v-icon right dark>cloud_upload</v-icon>
                </v-btn>
            </v-radio-group>
          </v-flex>

        </v-layout>
      </v-container>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  },
  data () {
    return {
      radios: 'radio-1'
    }
  }
}
</script>
<style lang="stylus">
  .Layout{
    background-color rgba(0,0,0,0.7)
    padding-top 20px
    padding-left 30px
  }
  .titulo{
    background-color darkred
    margin 0 0 -16px 0
    font-size 20px
    padding-left 15px
  }
  .titulo1{
    background-color darkred
    margin 0 0 -16px 0
    font-size 20px
    padding-left 15px
  }
  .botton{
    height 40px
    margin -8px
  }
  .ancho{
    width 1000px
  }
</style>
