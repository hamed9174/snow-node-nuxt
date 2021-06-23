<template>
  <div class="container-fluid">
    <Header />
    <div class="login row">
      <div class="col-md-6 col-8 col-lg-3" >
        <h1 class="text-center p-3"><ins>Register</ins></h1>
        <validation-observer ref="observer" class="form-validate" v-slot="{ handleSubmit }">
          <b-form class="p-3" @submit.prevent="handleSubmit(Register)">
            <b-form-group class="py-2">
              <ValidationProvider rules="required|alpha_num|alpha_spaces|min:4" v-slot="{ errors }">
                <b-form-input
                    id="input-2"
                    v-model="form.username"
                    placeholder="Enter name"
                ></b-form-input>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </b-form-group>
            <b-form-group
                class="py-2"
                placeholder="Enter email"
            >
              <ValidationProvider rules="required|email" v-slot="{ errors }">
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                ></b-form-input>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </b-form-group>
            <b-form-group class="py-2">
              <ValidationProvider rules="required|min:6" v-slot="{ errors }">
                <b-form-input
                    v-model="form.password"
                    type="password"
                    placeholder="Enter password"
                ></b-form-input>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </b-form-group>
            <b-form-group class="py-2" id="input-group-4" v-slot="{ ariaDescribedby }">
              <b-form-checkbox v-model="rememberMe" class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
            </b-form-group>

            <b-button type="submit" variant="primary">create</b-button>

          </b-form>
        </validation-observer>
        <h6 class="mt-3 p-3"> have an account? <router-link to="/login">sing in</router-link></h6>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import api from '../services/api'
export default {
  name: "Login",
  components: {
    Header,
  },
  data(){
    return{
      rememberMe : false,
      form : {
        username : '',
        email : '',
        password:''
      }
    }
  },
  methods:{
    async Register() {
      await api.post('login' , this.form).then(
          res => {
            if (this.rememberMe){
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('user', JSON.stringify(res.data))
            } else {
              sessionStorage.setItem('token', res.data.token)
              sessionStorage.setItem('user', JSON.stringify(res.data))
            }
          }
      ).catch(err => console.log(err))
      this.form = {
        username: '',
        password: '',
        email : '',
      }
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>
