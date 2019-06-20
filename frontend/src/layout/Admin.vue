<template>
  <v-app
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.text" :to="item.link" active-class="activo--text">
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
      color="#9A0101"
      dense
      fixed
      clipped-left
      app
    >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <img src="../assets/lofo-fondo-blanco.png" alt="">
      <v-toolbar-title class="mr-5 align-center">
      <span class="title ">Chon´s Gym</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
            <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'admin',
  methods: {
    clickButon (value) {
      this.$router.push(value.link)
    }
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'edit', text: 'Editar Perfil', link: 'editar-perfil-admin' },
      { icon: 'business', text: 'Planes', link: '/Admin/planes-admin' },
      { icon: 'fas fa-box', text: 'Clases', link: '/Admin/clases-admin' },
      { icon: 'history', text: 'Registro de compras', link: '/Admin/registro-compras' },
      { icon: 'update', text: 'Registro de Empleados', link: '/Admin/registro-empleados' },
      { icon: 'featured_play_list', text: 'Gestión de reservas', link: '/Admin/gestion-clases' },
      { icon: 'add', text: 'Proveedores', link: '/Admin/proveedores-admin' },
      { icon: 'money', text: 'Registro de Ventas', link: '/Admin/registro-ventas' },
      { icon: 'present_to_all', text: 'Novedades', link: '/Admin/novedades' },
      { icon: 'info', text: 'Tips', link: '/Admin/tips' },
      { icon: 'place', text: 'Instalaciones', link: '/Admin/instalacionesAdmin' },
      { icon: 'close', text: 'Salir', link: '/Cliente/Login' }
    ],
    props: {
      source: String
    }
  })
}
</script>
<style lang="stylus">
  img{
  width 60px
  height 45px
  }
   aside.v-navigation-drawer{
    background-color #9A0101 !important
  }
  span.title{
    font-size 40px !important
    color white
  }
  .v-navigation-drawer > .v-list:not(.v-list--dense) .v-list__tile {
    font-size 18px !important
    height 57.7px
    color white
  }
  div.v-content{
    background-color white !important
  }
  .container.fill-height {
   background-color white
  }
  .act{
    background-color white !important
  }
  .v-icon{
    color white
  }
  .theme--light.v-icon {
    color: white;
  }
  .v-toolbar__content > *:first-child.v-btn--icon, .v-toolbar__extension > *:first-child.v-btn--icon {
      color: white;
  }
  .lista{
    background-color grey !important
  }
</style>
