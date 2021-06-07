<template>
  <v-row justify="center">
    <v-col cols="12" class="pa-10">
      <v-data-table
        :headers="headers"
        :items="contacts"
        sort-by="create at"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Contact Us</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialogRaed"
              max-width="500px"
            >
              <v-card>
                <v-card-title>
                  <span class="headline">Mail</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                      >
                        <h3>name : </h3>{{contact.name}}
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <h3>title : </h3>{{contact.title}}
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <h3>message : </h3>{{contact.message}}
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
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
            @click="readItem(item)"
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
      dialogRaed:false,
      headers: [
        {
          text: 'name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'message', value: 'message' },
        { text: 'title', value: 'title'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      contacts: [],
      successDialog : false,
      contact:{},
    }
  },
  async created() {
    await api.get('contact')
      .then(res => this.contacts = res.data)
      .catch(err => console.log(err));
  },
  methods:{
    readItem (item) {
      this.contact = item
      this.dialogRaed = true
    },

    deleteItem (item) {
      this.contact = item
      this.dialogDelete = true

    },

    async deleteItemConfirm () {
      await api.delete('contact' , {data :this.contact})
        .then(
          res => {
            this.successDialog = true
            this.contacts = res.data
          }
        ).catch(err => console.log(err));
      this.closeDelete()
    },

    closeDelete () {
      this.contact = {};
      this.dialogDelete = false
    },
  }
}
</script>

<style scoped>

</style>
