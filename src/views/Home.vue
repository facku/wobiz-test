<template>
  <div class="container">
    <h1>Home</h1>

    <div class="col py-4">
      <pre>{{$store.state.user}}</pre>
    </div>

    <b-button variant="danger" @click="logout">Cerrar sesión</b-button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',

  methods: {
    logout () {
      this.$store.dispatch('user/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
