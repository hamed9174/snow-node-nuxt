<template>
  <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          Images
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-row>
        <v-col
          v-for="image in images"
          class="d-flex child-flex"
          cols="4"

        >
          <v-img
            @click="imageUpdate(image)"
            :src="`http://localhost:5000/assets/images/${image.name}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Images",
  props:['images' , 'image', 'dialogImage'],
  methods:{
    imageUpdate(img){
      this.image = img;
      this.dialogImage = false
      this.$emit('update:image', this.image)
      this.$emit('update:dialogImage', this.dialogImage)
    }
  }
}
</script>

<style scoped>

</style>
