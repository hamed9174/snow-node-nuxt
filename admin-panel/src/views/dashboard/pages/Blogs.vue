<template>
  <v-row justify="center">
    <v-col cols="12" class="pa-10">
      <v-data-table
        :headers="headers"
        :items="blogs"
        sort-by="create at"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>My Blogs</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <template>
              <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="editItem('new')"
              >
                Add Blog
              </v-btn>
            </template>
            <v-dialog
              v-model="dialogEdit"
              max-width="500px"
            >
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="blog.title"
                          :counter="10"
                          label="Title"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="blog.content"
                          :counter="10"
                          label="Content"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-select
                          v-model="blog.category"
                          :items="categories"
                          label="Select"
                          data-vv-name="select"
                          required
                        ></v-select>
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
                            <img :src="`http://localhost:3000/assets/images/${image.name}`" alt="">
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
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
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
    <div class="text-center">
      <v-dialog
        v-model="successDialog"
        width="500"
      >
        <v-card>
          <v-card-text class="text-center">
            Blog created successfully
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </div>
  </v-row>
</template>

<script>
import Images from "../../../components/Images";
import api from "../../../services/api";
  export default {
    components:{
      Images,
    },
    data () {
      return {
        dialogDelete: false,
        dialogEdit:false,
        headers: [
          {
            text: 'title',
            align: 'start',
            sortable: false,
            value: 'title',
          },
          { text: 'category', value: 'category' },
          { text: 'content', value: 'content' },
          { text: 'create at', value: 'create_at.month'},
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        blogs: [],
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        successDialog : false,
        dialogImage: false,
        images:[],
        image:null,
        blog:{
          title: '',
          content: '',
          category: null,
        },
        categories: [],
        formTitle:null
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    async created() {
      await api.get('blogs')
        .then(res => this.blogs = res.data)
        .catch(err => console.log(err));
      await api.get('upload/image')
        .then(res => this.images = res.data)
        .catch(err => console.log(err));
      await api.get('blog-category').then(
        (res) => {
          this.categories = res.data[0].categories
        }
      ).catch(
        err => console.log(err)
      );
    },
    methods:{
      editItem (item) {
        if (item === 'new'){
          this.formTitle = 'New Blog'
          this.blog = {
            title: '',
            content: '',
            select: null,
          }
        }
        else {
          this.formTitle = 'Edit Blog'
          this.blog = item
        }
        this.dialogEdit = true
      },

      deleteItem (item) {
        this.blog = item
        this.dialogDelete = true

      },

      async deleteItemConfirm () {
        await api.delete('blogs' , {data :this.blog})
          .then(
            res => {
              this.successDialog = true
              this.blogs = res.data
            }
          ).catch(err => console.log(err));
        this.closeDelete()
      },

      close () {
        this.dialogEdit= false
      },

      closeDelete () {
        this.blog = {
          title: '',
          content: '',
          category: null,
        };
        this.dialogDelete = false
      },

    async save () {
      if (this.formTitle === 'New Blog'){
        let data = {
          title : this.blog.title,
          content :this.blog.content,
          img : this.image.name,
          category : this.blog.category,
          create_at:{
            year : '',
            month : '',
            day : ''
          }
        };
        await api.post('blogs' , data)
          .then(
            res => {
              this.close()
              this.successDialog = true
              this.blogs = res.data
            }
          ).catch(err => console.log(err))
      }
      else {
        await api.put('blogs' , this.blog)
          .then(
            res => {
              this.close()
              this.successDialog = true
              this.blogs = res.data
            }
          ).catch(err => console.log(err))
      }
    },
    }
  }
</script>

<style scoped>

</style>
