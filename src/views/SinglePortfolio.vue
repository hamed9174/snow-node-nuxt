<template>
  <div class="container-fluid">
    <Header />
    <div class="portfolio row">
      <div class="col-12">
        <div class="container">
          <div class="portfolios-content mt-4">
            <div class="row">
              <div class="col-md-8">
                <div>
                  <h1 class="pb-4">{{portfolio.title}}</h1>
                  <p>
                    {{portfolio.description}}
                  </p>
                </div>
              </div>
              <div class="col-md-4 portfolio-info mt-5">
                <p><span class="portfolio-info-title">Client</span> : <span>	{{portfolio.client}}</span></p>
                <p><span class="portfolio-info-title">Date</span> : <span>{{portfolio.create_at.month}}.{{portfolio.create_at.day}}.{{portfolio.create_at.year}}</span></p>
                <p><span class="portfolio-info-title">Share</span> : <span>	Facebook, Twitter, Pinterest</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 portfolio-img">
        <div class="container">
          <img :src="`${webUrl}/assets/images/${portfolio.img}`" alt="">
        </div>
      </div>
      <div class="my-comments col-12 pt-5">
        <div class="container">
          <b-card bg-variant="dark" text-variant="white">
            <b-card-title>
              Comments ({{portfolio.comments.length}})
            </b-card-title>
            <div class="add-comment py-3">
              <ValidationObserver class="form-validate row" ref="add" v-slot="{ handleSubmit }">
                <b-form enctype="application/json" class="form-row col-12" @submit.prevent="handleSubmit(AddComment)">
                  <div class="col-8 py-3">
                    <b-form-group
                        id="input-group-1"
                    >
                      <ValidationProvider name="Comment" v-slot="{ errors }">
                        <b-form-input
                            v-model="comment"
                            type="text"
                            placeholder="Add Comment"
                        ></b-form-input>
                        <span>{{ errors[0] }}</span>
                      </ValidationProvider>
                    </b-form-group>
                  </div>
                  <div class="col-4 py-3">
                    <b-button type="submit">send comment</b-button>
                  </div>
                </b-form>
              </ValidationObserver>
            </div>
            <b-modal size="xl" :title="formTitle" :hide-footer="true" v-model="addReplyComment">
              <div class="add-comment py-3">
                <ValidationObserver class="form-validate row" ref="reply" v-slot="{ handleSubmit }">
                  <b-form enctype="application/json" class="form-row col-12" @submit.prevent="handleSubmit(ChangeComment)">
                    <div class="col-8 py-3">
                      <b-form-group
                          id="input-group-1"
                      >
                        <ValidationProvider name="Last-Name" rules="required|min:20" v-slot="{ errors }">
                          <b-form-input
                              v-model="replyComment"
                              type="text"
                              placeholder="Add Reply Comment"
                          ></b-form-input>
                          <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                      </b-form-group>
                    </div>
                    <div class="col-4 py-3">
                      <b-button type="submit">send comment</b-button>
                    </div>
                  </b-form>
                </ValidationObserver>
              </div>
            </b-modal>
            <div class="comments" v-if="portfolio.comments.length">
              <div class="comment py-3" v-for="(comment , index) in portfolio.comments">
                <b-card bg-variant="white" text-variant="dark">
                  <h3>{{comment.message}}</h3>
                  <div class="comment-options">
                    <span @click="ShowReplyComment(index)">Reply</span>
                    <span @click="EditComment(index)">Edit</span>
                    <span @click="DeleteComment(index)">Delete</span>
                  </div>
                  <div class="replies mt-3" v-if="comment.replies.length">
                    <b-card>
                      <div v-for="reply in comment.replies">
                        <h2>{{reply.writer}}</h2>
                        <h3>{{reply.message}}</h3>
                      </div>
                    </b-card>
                  </div>
                </b-card>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/common/Header'
import {webUrl} from "../services/xhr";
import api from "../services/api";
export default {
  name: "SinglePortfolio",
  components: {
    Header
  },
  data(){
    return{
      webUrl,
      formTitle : '',
      method : '',
      addReplyComment: false,
      comment : '',
      replyComment: '',
      orgComment: {},
      comments : [],
      portfolio : null,
      id : null,
      index : null
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    }
  },
  async mounted() {
    let id = this.$route.params.id
    await api.get(`portfolios/single-portfolio/${id}`)
        .then(
            res => this.portfolio = res.data
        )
        .catch(err => console.log(err))
  },
  watch: {
    addReplyComment: function (val) {
      if (!val) {
        this.replyComment = ''
      }
    },
  },
  methods:{
    EditComment(index){
      this.addReplyComment = !this.addReplyComment
      this.index = index;
      this.replyComment = this.portfolio.comments[index].message;
      this.method = 'edit';
      this.formTitle = 'Edit Comment';
    },
    async AddComment(){
      let comment = {
        message : this.comment,
        writer : this.user.username,
        replies : [],
      };
      this.portfolio.comments.push(comment)
      await api.put(`portfolios/comment`, this.portfolio)
          .then(res => {
            this.portfolio = res.data
          })
          .catch(err => console.log(err))
      this.comment = ''
      this.$refs.add.reset()
    },
    ShowReplyComment(index){
      this.index = index;
      this.addReplyComment = !this.addReplyComment;
      this.method = 'reply';
      this.formTitle = 'Reply Comment';
    },
    async ChangeComment(){
      if (this.method === 'reply'){
        let reply = {
          message : this.replyComment,
          writer: this.user.username
        }
        this.portfolio.comments[this.index].replies.push(reply)
        await api.put(`portfolios/comment`, this.portfolio)
            .then(res => {
              this.portfolio = res.data
            })
            .catch(err => console.log(err))

      } else {
        this.portfolio.comments[this.index].message = this.replyComment
        await api.put(`portfolios/comment`, this.portfolio)
            .then(res => {
              this.portfolio = res.data
            })
            .catch(err => console.log(err))
      }
      this.replyComment = '';
      this.addReplyComment = !this.addReplyComment;
      this.$refs.reply.reset()
    },
    async DeleteComment(index) {
      this.replyComment = this.portfolio.comments[index].message;
      let comments = this.portfolio.comments.filter(comment => comment.message !== this.replyComment)
      this.portfolio.comments = comments
      await api.put(`portfolios/comment`, this.portfolio)
          .then(res => {
            this.portfolio = res.data
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
