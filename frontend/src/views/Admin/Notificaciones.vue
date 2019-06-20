<template>

</template>
<script>
export default {
  created () {
    this.$store.commit('SET-LAYOUT', 'admin-layout')
  }
}
</script>
