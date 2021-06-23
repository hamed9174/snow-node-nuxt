<template>
  <div class="col-12 comments">
    <div v-if="$auth.user">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="comment in comments">
          <h4>{{comment.message}} (
            <span @click="addReply(comment)" class="m-2">
              reply
            </span>)
          </h4>
          <p>{{comment.writer}}</p>
          <div>

          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="mt-5 text-center">
        <b-button class="mx-2 text-white" @click="AddComment()" variant="outline-secondary">
          Add Comments
        </b-button>
      </div>
      <div class="add-comment mt-5 row" v-show="add_reply">
        <ValidationObserver class="form-validate row col-lg-6" ref="add" v-slot="{ handleSubmit }">
          <b-form enctype="application/json" class="form-row col-12" @submit.prevent="handleSubmit(SendComment)">
            <div class="col-12 py-3">
              <ValidationProvider name="Comment" rules="required|min:20" v-slot="{ errors }">
                <b-form-textarea
                  id="textarea-default"
                  v-model="message"
                  placeholder="Your Comment"
                  rows="7"
                ></b-form-textarea>
                <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="col-12">
              <b-button type="submit">Submit</b-button>
            </div>
          </b-form>
        </ValidationObserver>
      </div>
    </div>
    <div class="col-12 py-3" v-else>
      <b-alert show variant="warning" class="py-3">You must be logged in to view comments. (<router-link to="/login">sign in</router-link>)</b-alert>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      add_reply :false,
      comment : {},
      message: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      },
      comments:[],
      comment_id : '',
      method : ''
    }
  },
  async beforeMount() {
    await this.$api.get('comments').then(
      (res) => {
        this.comments = res.data
      }
    ).catch(
      err => console.log(err)
    )
  },
  methods:{
    addReply(comment){
      this.add_reply = !this.add_reply;
      this.comment = comment;
      this.method = 'reply'
    },
    async AddComment(){
      this.add_reply = !this.add_reply;
      this.method = 'add'
    },
    async SendComment(){
      if (this.method === 'reply'){
        let replyComment = {
          comment : {
            message : this.message,
            writer : this.user.username,
          },
          orgComment : this.comment
        };
        await this.$api.put('comments',replyComment).then(
          res => console.log(res)
        ).catch( err => console.log(err));
        this.message = '';
        this.add_reply = !this.add_reply;
      } else {
        let Comment = {
          message : this.message,
          writer : this.user.username,
          replies : [],
          create_at : {
            year : '',
            month : '',
            day : ''
          }
        };
        await this.$api.post('comments',Comment).then(
          res => this.comments = res.data
        ).catch( err => console.log(err));
        this.message = '';
        this.add_reply = !this.add_reply;
        this.$refs.add.reset()
      }
    },
  }
}
</script>

<style scoped>

</style>
