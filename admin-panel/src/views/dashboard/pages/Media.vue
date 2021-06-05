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
              Add image
            </v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <v-card-actions>
          <input type="file" ref="image" @change="saveFiles">
        </v-card-actions>
        <v-card-actions>
          <v-text-field
            label="Alt"
            :rules="rules"
            v-model="alt"
          ></v-text-field>
        </v-card-actions>
        <v-card-actions>
          <v-btn
            depressed
            color="primary"
            @click="sendFile"
          >
            send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12">

    </v-col>
    <v-col cols="12">
      <Images :images="images" />
    </v-col>
  </v-row>
</template>

<script>
import Images from "../../../components/Images";
import api from "../../../services/api";
export default {
  name: "Media",
  components:{
    Images
  },
  data(){
    return{
      fileRecords: null,
      images:[],
      selectFile : false,
      alt : ''
    }
  },
  async created() {
    await api.get('upload/image')
      .then(res => this.images = res.data)
      .catch(err => console.log(err))
  },
  methods:{
    saveFiles(){
      this.fileRecords = this.$refs.image.files[0]
  },
    async sendFile(){
      const formData = new FormData()
      formData.append('image' ,this.fileRecords)
      formData.append('alt' ,this.alt)
      await api.post('upload/image', formData , {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then(res => this.images = res.data).catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
