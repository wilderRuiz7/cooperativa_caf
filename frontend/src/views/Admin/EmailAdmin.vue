<template>
    <div>
       <h1 class="red">hola mundo</h1>
    </div>
</template>
<script>
export default {
  created () {
    this.$store.commit('SET_LAYOUT', 'admin-layout')
  }
}
</script>
