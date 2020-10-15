<template>
  <div class="col col-12">
    <div class="row">
      <div class="col col-12 col-md-6 col-lg-4 p-0 ml-0">
        <div class="box vh-100 box-shadow">
          <div class="row h-100">
            <div class="h-100 col">
              <a data-v-508c2672="" href="https://www.wobiz.com"><img data-v-508c2672="" src="@/assets/logo.png" class="logo"></a>
              <login-form @submit="submit"/>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-lg-8 col-md-6 d-none d-md-block p-0 ">
        <div class="position relative vh-100">
          <img class="vh-100 position-relative vw-img" src="@/assets/landingBackground.png">
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

  methods: {
    submit (event) {
      // console.log(event)
      this.$store.dispatch('user/login', event)
    }
  }

}
</script>
