<template>
  <b-form @submit.prevent="onSubmit">
    <h2 class="greenish-blue-text mt-5 mb-4 bolder">Ingresa a tu cuenta</h2>

    <b-form-group
      label="Email"
    >
      <b-form-input v-model="model.username" :readonly="$store.state.app.loading" placeholder="ej: usuario@mail.com" size="lg"></b-form-input>

      <div class="alert alert-danger mt-3" role="alert" v-show="false">
        Necesitamos tu email.
      </div>
    </b-form-group>

    <b-form-group
      label="Password"
    >
      <b-form-input v-model="model.password" :readonly="$store.state.app.loading" type="password" placeholder="Escribe tu Contraseña" size="lg"></b-form-input>

      <div class="alert alert-danger mt-3" role="alert" v-show="false">
        Necesitamos tu contraseña.
      </div>
    </b-form-group>

    <div style="margin:1.6rem auto;"  >
      <a href="https://admin.wobiz.com.ar/recovery">¿Olvidaste tu contraseña?</a>
    </div>

    <b-button type="submit" block style="background-color: #1bb8e3;border:none" size="lg">Ingresar a mi cuenta</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'LoginForm',

  data () {
    return {
      model: {
        username: 'facku',
        password: '56s1d5s1ds561d'
      }
    }
  },

  methods: {
    onSubmit () {
      this.$emit('submit', { ...this.model })
    }
  }
}
</script>

<style lang="css" scoped>
.alert-danger {
  background-color:#e85837;
  color:white;
  border:none;
}
</style>
