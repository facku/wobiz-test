<template>
  <b-form @submit.prevent="onSubmit">
    <h2 class="greenish-blue-text mt-5 mb-4 bolder">Ingresa a tu cuenta</h2>

    <b-form-group
      label="Email"
    >
      <b-form-input v-model="model.username" :readonly="$store.state.app.loading" placeholder="ej: usuario@mail.com" size="lg"></b-form-input>

      <div class="alert alert-danger mt-3" role="alert" v-show="error">
        Necesitamos tu email.
      </div>
    </b-form-group>

    <b-form-group
      label="Password"
    >
      <b-form-input v-model="model.password" :readonly="$store.state.app.loading" type="password" placeholder="Escribe tu Contraseña" size="lg"></b-form-input>

      <div class="alert alert-danger mt-3" role="alert" v-show="error">
        Necesitamos tu contraseña.
      </div>
    </b-form-group>

    <div class="mb-3">
      <a class="text-secondary" href="https://admin.wobiz.com.ar/recovery">¿Olvidaste tu contraseña?</a>
    </div>

    <b-button class="b-button" type="submit" block size="lg">Ingresar a mi cuenta</b-button>
  </b-form>
</template>

<script>
export default {
  name: 'LoginForm',

  props: {
    error: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      model: {
        username: '',
        password: ''
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
a {
  font-size:15px;
}

.alert-danger {
  background-color:#e85837;
  color:white;
  border:none;
}

.b-button {
  background-color: #1bb8e3;
  font-size: 1rem;
  font-weight: 500;
  border: nonde;
}

.b-button:hover {
  background-color: #126c85;
}
</style>
