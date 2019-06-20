<template>
    <component :is="layout"></component>
</template>

<script>
import AdminLayout from './layout/Admin.vue'
import EmpleadoLayout from './layout/Empleado.vue'
import PrincipalLayout from './layout/Principal.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: mapState(['layout']),
  components: {
    AdminLayout,
    EmpleadoLayout,
    PrincipalLayout
  }
}
</script>
<style >
  body {
    font-family: 'Roboto', sans-serif !important;
  }
</style>
