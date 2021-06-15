<template>
  <div class="login row">
    <div class="col-md-6 col-8 col-lg-3" >
      <h1 class="text-center p-3"><ins>Login</ins></h1>
      <b-form class="p-3" @submit.prevent="onSubmit">
        <b-form-group>
          <b-form-input
            v-model="form.username"
            type="text"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
        </b-form-group>

        <b-button type="submit" variant="primary">login</b-button>

      </b-form>
      <h6 class="mt-3 p-3">Do not have an account? <router-link to="/register">sing up</router-link></h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      form : {
        username : '',
        password:''
      }
    }
  },
  methods:{
    async onSubmit() {
      await this.$auth.loginWith('local', {
        data: {
          username: this.form.username,
          password: this.form.password
        }
      })
      this.form = {
        username: '',
        password: ''
      }
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>
