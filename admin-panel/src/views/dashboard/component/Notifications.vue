<template>
  <v-container
    id="alerts"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        v-if="Unseen"
      >
        <v-card>
          <v-card-subtitle>Unseen messages</v-card-subtitle>
          <v-card-text>
            <v-alert
              color="red lighten-2"
              dark
              v-for="notification in Unseen"
            >
              <v-row align="center">
                <v-col class="grow">
                  {{notification.message}}
                </v-col>
                <v-col class="shrink">
                  <v-btn @click="ReadNotification(notification)">Read</v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
      >
        <v-card>
          <v-card-subtitle>Viewed messages</v-card-subtitle>
          <v-card-text>
            <base-material-alert
              v-if="Viewed"
              v-for="notification in Viewed"
              color="primary"
              dark
            >
              {{notification.message}}
            </base-material-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import api from "../../../services/api";

  export default {
    name: 'DashboardNotifications',

    data: () => ({
      snackbar: false,
      notifications:[]
    }),

    computed: {
      Unseen(){
        if (this.notifications.length){
          let unseen = this.notifications.filter(note => note.read === false)
          if (unseen.length) {
            return unseen
          } else {
            return null
          }
        } else {
          return null
        }
      },
      Viewed(){
        if (this.notifications.length){
          let viewed = this.notifications.filter(note => note.read === true)
          if (viewed) {
            return viewed
          } else {
            return null
          }
        } else {
          return null
        }
      }
    },
    async created(){
      await api.get('notifications').then(
        res => this.notifications = res.data
      ).catch(err => console.log(err))
    },
    methods: {
      async ReadNotification(notification){
        await api.put('notifications' , notification).then(
          res => this.notifications = res.data
        ).catch(err => console.log(err))
      }
    },
  }
</script>
