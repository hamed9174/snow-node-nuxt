<template>
  <v-row class="pa-10">
    <v-col cols="12">
      <v-card
        class="mx-auto"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              About Us setting
            </v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        <v-card>
          <v-card-title>
            <span class="headline"></span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-textarea
                    v-model="about.content"
                    counter
                    label="Content"
                  ></v-textarea>
                </v-col>
                <v-col
                  cols="12"
                >
                  <div class="py-8">
                    <v-btn depressed @click="dialogImage = true">
                      Select Image
                    </v-btn>
                    <v-chip
                      v-if="image"
                      color="red"
                      outlined
                    >{{image.name}}</v-chip>
                    <div v-if="image">
                      <img :src="`http://localhost:5000/assets/images/${image.name}`" alt="">
                    </div>
                    <div v-else>
                      <img :src="`http://localhost:5000/assets/images/${about.img}`" alt="">
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="save"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
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
</template>

<script>
import Images from "../../../components/Images";
import api from "../../../services/api";
export default {
  name: "About",
  components:{
    Images
  },
  data(){
    return{
      about:{},
      content: '',
      dialogImage: false,
      images: [],
      image: null,
    }
  },
  async created() {
    await api.get('upload/image')
      .then(res => this.images = res.data)
      .catch(err => console.log(err));
    await api.get('about')
      .then(res => this.about = res.data)
      .catch(err => console.log(err));
  },
  methods:{
    async save () {
      let data = this.about;
      if(this.image) {
        data.img = this.image.name
      }
      await api.put('about' , data)
        .then(
          res => {
            this.about = res.data;
            this.image = null
          }
        ).catch(err => console.log(err))
    },
  }
}
</script>

<style scoped>

</style>
