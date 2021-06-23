<template>
  <validation-observer ref="observer" class="form-validate" v-slot="{ handleSubmit }">
    <b-form class="row" @submit.prevent="handleSubmit(Send)">
      <div class="col-md-6 py-3">
        <b-form-group
          id="input-group-1"
        >
          <ValidationProvider rules="required|alpha_num|alpha_spaces|min:4" v-slot="{ errors }">

            <b-form-input
              id="input-1"
              v-model="contact.name"
              type="text"
              placeholder="Name"
            ></b-form-input>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>
      </div>
      <div class="col-md-6 py-3">
        <b-form-group id="input-group-2">
          <ValidationProvider rules="required|email" v-slot="{ errors }">
            <b-form-input
              id="input-2"
              v-model="contact.email"
              placeholder="Email"
              type="email"
            ></b-form-input>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>
      </div>
      <div class="col-12 py-3">
        <b-form-group id="input-group-2">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <b-form-input
              v-model="contact.title"
              placeholder="Your Title"
              type="text"
            ></b-form-input>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>
      </div>
      <div class="col-12 py-3">
        <ValidationProvider rules="required|min:20" v-slot="{ errors }">
          <b-form-textarea
            id="textarea-default"
            v-model="contact.message"
            placeholder="Your Comment"
            rows="7"
          ></b-form-textarea>
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </div>
      <div class="col-12">
        <b-button type="submit">Send</b-button>
      </div>
    </b-form>
  </validation-observer>
</template>

<script>
import api from "../services/api";
export default {
  name: "contactForm",
  data(){
    return{
      modalShow : false,
      contact: {
        email: '',
        name: '',
        title : '',
        message : ''
      },
    }
  },
  methods: {
    async Send() {
      await api.post('contact' , this.contact).then(
        res => this.modalShow = true
      ).catch(err => console.log(err))
      this.contact = {
        email: '',
        name: '',
        title : '',
        message : ''
      }
      this.$refs.observer.reset()
    },
  }
}
</script>

<style scoped>

</style>
