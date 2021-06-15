<template>
  <div class="row">
    <div class="col-12 contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 contact-info">
            <h1 class="py-4">Contact Info:</h1>
            <p class="py-4">
              Praesent interdum congue mauris, et fringilla lacus pel vitae.
              Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus.
              Quisque cursus risus id. fermentum, in auctor quam consectetur.
            </p>
            <p class="py-2">
              <span>Address:</span> 10111 Santa Monica Boulevard, LA
            </p>
            <p class="py-2">
              <span>Phone:</span> +44 987 065 908
            </p>
            <p class="py-2">
              <span>Email:</span> info@Example.com
            </p>
            <p class="py-2">
              <span>Fax:</span> +44 987 065 909
            </p>
          </div>
          <div class="col-lg-7 contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="modalShow" ok-only >Message sent successfully</b-modal>
  </div>
</template>

<script>
import ContactForm from "~/components/ContactForm";
  export default {
    name: "index",
    components: {
      ContactForm
    },
  }
</script>

<style scoped>

</style>
