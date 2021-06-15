<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="font-weight-light">
              Edit Profile
            </div>

            <div class="font-weight-light">
              Complete your profile
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Company (disabled)"
                    v-model="user.company"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="User Name"
                    v-model="user.username"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="user.email"
                    label="Email Address"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="user.firstName"
                    label="First Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="user.lastName"
                    label="Last Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="user.address"
                    label="Address"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="user.city"
                    label="City"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="user.country"
                    label="Country"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="user.about_me"
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="UpdateProfile"
                  >
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          :avatar="`http://localhost:5000/assets/images/${user.img}`"
        >
          <v-icon
            large
            color="teal darken-2"
            class="camera-icon"
            @click="dialogImage = true"
          >
            mdi-camera
          </v-icon>
          <v-card-text class="text-center">
            <h6 class="mb-1 grey--text" v-if="user.company">
              {{ user.company }}
            </h6>

            <h4 class="font-weight-light mb-3 black--text">
              {{ user.firstName }} {{ user.lastName }}
            </h4>

            <p class="font-weight-light grey--text" v-if="user.about_me">
              {{user.about_me}}
            </p>

          </v-card-text>
        </base-material-card>
      </v-col>
      <v-dialog
        v-model="dialogImage"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-btn
              icon
              dark
              @click="dialogImage = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <Images :image.sync="image" :images="images" :dialogImage.sync="dialogImage" />
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
  import api from "../../../services/api";
  import Images from "../../../components/Images";
  export default {
    components:{
      Images
    },
    data(){
      return {
        user:{},
        userEdit:{
          username : '',
          lastName : '',
          firstName : '',
          company : '',
          country : '',
          city : '',
          state : '',
          about_me : '',
          address : '',
          img : '',
        },
        dialogImage: false,
        images:[],
        image:null,
        img : ''
      }
    },
    watch:{
      image : function (val) {
        console.log(val)
        this.user.img = val.name
      }
    },
    async created() {
      await api.get('user').then(res => {
        this.user = res.data.user
      }).catch(err => console.log(err))
      await api.get('upload/image')
        .then(res => this.images = res.data)
        .catch(err => console.log(err));
    },
    methods:{
      async UpdateProfile(){
        await api.put('user', this.user)
          .then(res => this.user = res.data)
          .catch(err => console.log(err));
      }
    }
  }
</script>
<style>
  .v-card-profile{
    position: relative;
  }
  .camera-icon{
    position: absolute;
    left: 45%;
    bottom: 50%;
  }
</style>
