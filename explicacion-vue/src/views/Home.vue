<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Nombre: <input type="text" name="" v-model="nombre">
    <p>hola {{nombre}}</p>
    <button v-on:click="sumar">+</button>
    <p>contador = {{contador}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      nombre: '',
      contador: 0
    }
  },
  components: {
  },
  methods: {
    sumar() {
      this.contador++
    }
    //sumar :function (){

    //}
  },
}
</script>
