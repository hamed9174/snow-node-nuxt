<template>
  <v-row justify="center">
    <v-col cols="12" class="pa-10">
      <v-data-table
        :headers="headers"
        :items="comments"
        sort-by="create at"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>My Comments</v-toolbar-title>
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
                Add Comment
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
                <v-card-text v-if="createForm">
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="comment.writer"
                          :counter="10"
                          label="Your Name"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="comment.message"
                          :counter="10"
                          label="Title"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-text v-if="editForm">
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="message"
                          :counter="10"
                          label="Title"
                          required
                        ></v-text-field>
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
    <div class="text-center">
      <v-dialog
        v-model="successDialog"
        width="500"
      >
        <v-card>
          <v-card-text class="text-center">
            comment created successfully
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>
    </div>
  </v-row>
</template>

<script>
import api from "../../../services/api";
export default {
  data () {
    return {
      dialogDelete: false,
      dialogEdit:false,
      headers: [
        {
          text: 'writer',
          align: 'start',
          sortable: false,
          value: 'writer',
        },
        { text: 'message', value: 'message' },
        { text: 'create at', value: 'create_at.month'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      comments: [],
      successDialog : false,
      comment:{
        message: '',
        writer: '',
      },
      formTitle:null,
      editForm: false,
      createForm : false,
      message : ''
    }
  },
  watch: {
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  async created() {
    await api.get('http://localhost:3000/comments')
      .then(res => this.comments = res.data)
      .catch(err => console.log(err));
  },
  methods:{
    editItem (item) {
      if (item === 'new'){
        this.formTitle = 'New Comment';
        this.comment = {
          writer: '',
          message: '',
        }
        this.editForm = false;
        this.createForm = true;
      }
      else {
        this.formTitle = 'Edit comment'
        this.comment = item
        this.message = item.message

        this.createForm = false;
        this.editForm = true;
      }
      this.dialogEdit = true
    },

    deleteItem (item) {
      this.comment = item
      this.dialogDelete = true

    },

    async deleteItemConfirm () {
      await api.delete('comments' , {data :this.comment})
        .then(
          res => {
            this.successDialog = true
            this.comments = res.data
          }
        ).catch(err => console.log(err));
      this.closeDelete()
    },

    close () {
      this.dialogEdit= false
    },

    closeDelete () {
      this.comment = {
        writer: '',
        message: '',
      };
      this.dialogDelete = false
    },

    async save () {
      if (this.formTitle === 'New Comment'){
        let data = {
          writer : this.comment.writer,
          message :this.comment.message,
          create_at:{
            year : '',
            month : '',
            day : ''
          }
        };
        await api.post('comments' , data)
          .then(
            res => {
              this.close();
              this.successDialog = true;
              this.comments = res.data;
            }
          ).catch(err => console.log(err))
      }
      else {
        await api.put('comments/my', {
          message : this.message,
          orgComment : this.comment
        }).then(
          res => {
                  this.close()
                  this.successDialog = true
                  this.comments = res.data
                }
        ).catch( err => console.log(err));
      }
      this.editForm = false;
      this.createForm = false;
    },
  }
}
</script>

<style scoped>

</style>
