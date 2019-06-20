<template>
<div class=found>
  <v-container grid-list-xl>
    <p class="parrafo font-weight-black white--text display-2">Lo más importante para nosotros eres tú</p>
    <v-flex class="centro">
    <v-layout>
    <v-flex sm4 >
    <v-card class="carta">
            <v-toolbar-title class="texto font-weight-black black--text headline">Primer mes</v-toolbar-title>
      <v-list-tile>
                <v-list-tile-content>Peso:</v-list-tile-content>
                <v-list-tile-content class="align-end">71</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Altura:</v-list-tile-content>
                <v-list-tile-content class="align-end">1.60</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>I.M.C:</v-list-tile-content>
                <v-list-tile-content class="align-end">27.73</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Estado:</v-list-tile-content>
                <v-list-tile-content class="align-end">Sobrepeso</v-list-tile-content>
              </v-list-tile>
    </v-card>
    </v-flex>
    <v-flex sm4>
      <v-list-tile-content class="text font-weight-black black--text blue darken-4" >La condición actual es de sobrepeso de 5 kilogramos, el programa de entrenamientoestará enfocado en ejercicios de cardio para lograr mejores resultados.</v-list-tile-content>
    </v-flex>
    </v-layout>
    <v-layout>
    <v-flex sm4>
    <v-card class="carta">
            <v-toolbar-tittle class="texto1 font-weight-black black--text headline">Segundo mes</v-toolbar-tittle>
      <v-list-tile>
                <v-list-tile-content>Peso:</v-list-tile-content>
                <v-list-tile-content class="align-end">66</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Altura:</v-list-tile-content>
                <v-list-tile-content class="align-end">1.60</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>I.M.C:</v-list-tile-content>
                <v-list-tile-content class="align-end">23.13</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Estado:</v-list-tile-content>
                <v-list-tile-content class="align-end">Normal</v-list-tile-content>
              </v-list-tile>
    </v-card>
    </v-flex>
    <v-flex sm4>
      <v-list-tile-content class="text font-weight-black black--text blue darken-4 " >El progreso que ha tenido con respecto al mes anterior es totalmente impresionante. Los resultados son notoriamente visibles. ¡BIEN HECHO!</v-list-tile-content>
    </v-flex>
    </v-layout>
    </v-flex>
  </v-container>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}

</script>

<style lang="stylus" scoped>
.carta{
  margin-left -25px
  border-radius 0%
}
.centro{
  margin-left 200px
}
.parrafo{
  margin-left 25px
}
.text{
  padding 10px
}
.texto{
  margin-left 90px
}
.texto1{
  margin-left 70px
}

</style>
