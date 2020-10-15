<template>
  <b-form @submit.prevent="onSubmit">
    <h2 class="greenish-blue-text mt-5 mb-4 bolder">Ingresa a tu cuenta</h2>

    <b-form-group
      label="Email"
    >
      <b-form-input v-model="model.username" placeholder="ej: usuario@mail.com" size="lg"></b-form-input>
    </b-form-group>

    <b-form-group
      label="Password"
    >
      <b-form-input v-model="model.password" type="password" placeholder="Escribe tu Contraseña" size="lg"></b-form-input>
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
        password: '123456'
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
