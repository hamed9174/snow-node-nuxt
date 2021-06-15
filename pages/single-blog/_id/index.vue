<template>
  <div class="single-blog" v-if="blog">
    <div class="single-blogs">
      <div class="blog-img">
        <img :src="`${webUrl}/assets/images/${blog.img}`" alt="">
      </div>
      <div class="blog-content">
        <h1>{{blog.title}}</h1>
        <h4><span class="mx-3">{{blog.create_at.month}} {{blog.create_at.day}}, {{blog.create_at.year}}</span> <span class="category mx-3">{{blog.category}},</span> <span class="mx-3">2 COMMENTS</span></h4>
        <p>{{blog.content}}</p>
      </div>
      <div class="my-comments row pt-5">
        <div class="container">
          <b-card bg-variant="dark" text-variant="white">
            <b-card-title>
              Comments ({{blog.comments.length}})
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
            <div class="comments" v-if="blog.comments.length">
              <div class="comment py-3" v-for="(comment , index) in blog.comments">
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
import {webUrl} from "~/services/xhr";

export default {
      name: "SingleBlog",
      head:{
        title : 'Single Blog'
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
          comment_id : '',
          comments : [],
          blog : null,
          id : null,
          index : null
        }
      },
      async asyncData({$api , params}) {
        const blog = await $api.$get(`blogs/single-blog/${params.id}`)
        return {
          blog : blog
        }
      },
      methods:{
        EditComment(index){
          this.addReplyComment = !this.addReplyComment
          this.index = index;
          this.replyComment = this.blog.comments[index].message;
          this.method = 'edit'
          this.formTitle = 'Edit Comment'
        },
        async AddComment(){
          let comment = {
            message : this.comment,
            writer : this.$auth.user.username,
            replies : [],
          };
          this.blog.comments.push(comment)
          await this.$api.put(`blogs/comment`, this.blog)
            .then(res => {
              this.blog = res.data
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
          this.replyComment = ''
        },
        async ChangeComment(){
          if (this.method === 'reply'){
            let reply = {
              message : this.replyComment,
              writer: this.$auth.user.username
            }
            this.blog.comments[this.index].replies.push(reply)
            await this.$api.put(`blogs/comment`, this.blog)
              .then(res => {
                this.blog = res.data
              })
              .catch(err => console.log(err))

          } else {
            this.blog.comments[this.index].message = this.replyComment
            await this.$api.put(`blogs/comment`, this.blog)
              .then(res => {
                this.blog = res.data
              })
              .catch(err => console.log(err))
          }
          this.replyComment = '';
          this.addReplyComment = !this.addReplyComment;
          this.$refs.reply.reset()

        },
        async DeleteComment(index) {
          this.replyComment = this.blog.comments[index].message;
          let comments = this.blog.comments.filter(comment => comment.message !== this.replyComment)
          this.blog.comments = comments
          await this.$api.put(`blogs/comment`, this.blog)
            .then(res => {
              this.blog = res.data
            })
            .catch(err => console.log(err))
        }
      }
    }
</script>

<style scoped>

</style>
