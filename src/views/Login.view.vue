<template>
  <div class="col col-12">
    <div class="row">
      <div class="col col-12 col-md-6 col-lg-4 p-0 m-0 ">
        <div class="box vh-100 box-shadow">
          <div class="row h-100">
            <div class="h-100 col">
              <a data-v-508c2672="" href="https://www.wobiz.com"><img data-v-508c2672="" src="@/assets/logo.png" class="logo"></a>
              <login-form @submit="submit" :error="loginError"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-lg-8 col-md-6 d-none d-md-block p-0 ">
        <div class="position relative vh-100">
          <img class="vh-100 position-relative vw-img" src="@/assets/landingBackground.png">

          <div class="row text-button d-none d-lg-inline-flex">
            <p  class="greenish-blue-text mr-3 mt-2">
              ¿No tienes una cuenta en Wobiz?
            </p>
              <a href="https://admin.wobiz.com.ar/signup"
                class="btn btn-transparent-wobiz btn-outline-reseller"
              >
                <div data-v-0f6a5923="" class="button-text">Crea tu cuenta</div>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/login/Form.vue'
export default {
  name: 'Login',

  components: { LoginForm },

  data () {
    return {
      loginError: false
    }
  },

  methods: {
    submit (event) {
      this.$store.dispatch('app/Loading', true)

      this.loginError = false

      this.axios.post('//admin.localwobiz.com/login', event)
        .then(resp => {
          const data = {
            id: resp.data.user_id,
            sessionExpires: resp.data.expires,
            token: resp.data.token,
            user: event.username
          }

          this.$store.dispatch('user/login', data)

          setTimeout(() => {
            this.$store.dispatch('app/Loading', false)
            this.$router.push('/home')
          }, 600)
        })
        .catch(error => {
          console.log('errorData', error.response.data.message || error)
          this.loginError = true
          setTimeout(() => {
            this.$store.dispatch('app/Loading', false)
          }, 600)
        })
    }
  }

}
</script>

<style lang="css" scoped>
.text-button {
    top: 42px;
    position: absolute;
    right: 10%;
    font-size: 14px;
}

.btn {
    height: 35px;
    display: inline-block;
    font-weight: 700;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 13px;
    border-radius: .25rem;
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}

.btn:hover {
  color:white;
  background-color: #163a49;
}

.btn-outline-reseller{
    background-color: transparent;
    border: 1px solid #163a49;
}
</style>
