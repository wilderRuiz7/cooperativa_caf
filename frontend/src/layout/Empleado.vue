
<template>
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      class="green darken-4"
      v-model="drawer"
      fixed
      clipped
      app

    >
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
      <v-list >
        <v-list-tile v-for="item in items" :key="item.text" @click="clickMenu(item)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="green darken-4"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <img src="../assets/lofo-fondo-blanco.png" alt="">
      <v-toolbar-title class="mr-5 align-center ">
        <span class="display-1 font-weight-black font-italic">Chon's Gym</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'empleado-layaout',
  methods: {
    clickMenu (value) {
      console.log(value.link)
      this.$router.push(value.link)
    }
  },
  data: () => ({
    drawer: null,

    items: [
      { icon: 'person', text: 'Mi Perfil', link: '/Empleado/mi-perfil-empleado' },
      { icon: 'shopping_cart', text: 'Membresia', link: '/Empleado/membresias-empleado' },
      { icon: 'history', text: 'Rutina', link: '/Empleado/rutina-empleado' },
      { icon: 'history', text: 'Dieta', link: '/Empleado/dieta-empleado' },
      { icon: 'poll', text: 'Valoracion', link: '/Empleado/valoracion-empleado' },
      { icon: 'money', text: 'Ventas', link: '/Empleado/ventas-empleado' },
      { icon: 'close', text: 'Salir' }
    ]
  }),
  props: {
    source: String
  }
}
</script>
<style lang="stylus">
  img {
    width 60px !important
    height 40px
  }
  .v-navigation-drawer > .v-list:not(.v-list--dense) .v-list__tile{
    height 65px !important
  }
</style>
