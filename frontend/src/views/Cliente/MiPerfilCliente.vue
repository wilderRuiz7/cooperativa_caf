<template>
<div>
    <p></p>
<v-container fluid>
      <v-layout row wrap>
           <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
            <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
                <v-btn class="conexion" flat v-for="item in items" :key="item.text" @click="clickMenu(item)" to="/personalizados-cliente" color="black"><v-icon class="conexion_icon" color="black">{{ item.icon }}</v-icon>{{ item.text }}</v-btn>
     <p></p><br>
          </v-card>
        </v-flex>
         <v-flex d-flex xs12 sm6 md5>
          <v-card color="white" dark flat class="editarPerfil">
              <v-layout justify-center>
    <v-flex xs12 sm6 md12>
      <p></p>
      <img sm11 class="push" src="../../assets/perfilGym.jpg" alt="">
        <p></p>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md2>
          <v-card color="white" dark flat>
              <v-layout justify-center>
    <v-flex xs12 sm6 md12>
        <h1 class="text-xs blue--text title"><strong>HORARIOS</strong></h1><br>
        <h2 class="text-xs black--text body-1"><strong>LUN-JUE: 3AM a 11PM</strong></h2>
        <h3 class="text-xs black--text body-1"><strong>VIE: 3AM a 10PM</strong></h3>
        <p class="text-xs black--text body-1"><strong>SAB-DOM-FEST: 6AM a 6PM</strong></p>
  <img class="imagen_logo" src="../../assets/Logo-gym.png" alt="">
  <p></p>
        <h2 class="text-xs black--text body-1"><strong>Dirección: Cra 9 #28-56</strong></h2>
        <h3 class="text-xs black--text body-1"><strong>Télefono: 31857420</strong></h3>
        <p class="text-xs black--text body-1"><strong>Correo: chonsgym@gmail.com</strong></p>
    </v-flex>
  </v-layout>
          </v-card>
        </v-flex>
       <v-flex d-flex xs12 sm6 md1>
          <v-card color="white" dark flat>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    clickMenu (value) {
      this.$router.push(value.link)
    }
  },
  data: () => ({
    drawer: null,

    items: [
      { icon: 'person', text: 'Mi Perfil', link: '' },
      { icon: 'shopping_cart', text: 'Membresia', link: 'membresias-empleado' },
      { icon: 'history', text: 'Rutina', link: 'rutina-empleado' },
      { icon: 'poll', text: 'Valoracion', link: 'valoracion-empleado' },
      { icon: 'money', text: 'Ventas', link: 'ventas-empleado' },
      { icon: 'close', text: 'Salir' }
    ]
  }),
  props: {
    source: String
  }
}
</script>
<style lang="stylus" scoped>
 img.imagen_layout{
    height 500px
    width 700px !important
  }
  p.texto{
    background-color silver !important
    text-align center
    border solid 2px
    font-size 16px
    margin -5px 0px 0px -1px
    padding 10px
    font-family sans-serif
  }
  li{
    margin 0px 0px 0px 0px
  }
  article{
    margin 0px 0px 0px 60px
  }
  p.mensaje {
    font-size 13px
    margin 0px 0px 0px 440px
    font-family sans-serif
    color rgba(86, 86, 88, 0.877);
  }
img.edit{
  width 200px !important
  height 200px
  margin 10px 20px
  border solid 1px white
  }
  img.push{
  width 300px !important
  height 300px
  }
  .editarPerfil{
    text-align center
  }
  .v-btn.conexion{
      height 50px
      width 150px
      text-align left
  }
  h1.letras_c{
       font-size 15px
       color black
  }
  .conexion_icon{
    margin-right 10px!important
  }
</style>
