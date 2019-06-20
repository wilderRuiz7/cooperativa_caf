<template>
  <div class="about">
    <h2>hola a todos</h2>
    <template v-for="p in personas">
      <saludar-gym :persona="p" :key="p.id"></saludar-gym>
    </template>
  </div>
</template>
<script>
import SaludarGym from '@/components/Saludar.vue'
export default {
  components: { SaludarGym },
  data () {
    return {
      personas: [
        {
          id: 1,
          nombre: 'sebastian',
          apellido: 'arias',
          edad: 27
        },
        {
          id: 2,
          nombre: 'carlos',
          apellido: 'contreras',
          edad: 22
        },
        {
          id: 3,
          nombre: 'andrea',
          apellido: 'jaimes',
          edad: 19
        }
      ]
    }
  }

}
</script>
