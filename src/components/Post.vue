<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        @{{this.post.user.username}}
      </p>
    </header>
    <div class="card-content">
      <div class="content justify">
        {{this.post.text}}
        <br/>
        <a>{{new Date(this.post.created_at).toLocaleString()}}</a>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="like()" class="card-footer-item">{{this.post.likes.length || 0}} <i class="fa fa-thumbs-o-up" v-if="!this.post.likes.includes(this.user)"></i> <i v-else class="fa fa-thumbs-up"></i> </a>
      <a @click="dislike()" class="card-footer-item">{{this.post.dislikes.length || 0}} <i class="fa fa-thumbs-o-down" v-if="!this.post.dislikes.includes(this.user)"></i> <i class="fa fa-thumbs-down" v-else></i></a>
      <a
        :href="'/post/'+this.post._id"
        class="card-footer-item"
        v-if="this.allow_reply"
        >{{this.post.replies.length || 0}} Reply</a
      >
    </footer>
  </div>
</template>
<script>
/* eslint-disable */
import jwt from "jsonwebtoken";
let context;
export default {
  name: "post",
  props: ["allow_reply","post"],
  data(){
    return {
      user:jwt.decode(this.$cookies.get("jwt").access_token)._id
    }
  },
  methods:{
    like(){
      if(!this.post.likes.includes(this.user)){
        this.$http
        .post("like",{message_id:this.post._id})
        .then(res=>{
          if(res.status==200){
            if(res.data.success){
              this.post.likes.push(this.user);
              let index = this.post.dislikes.indexOf(this.user);
              if(this.post.dislikes.includes(this.user)){
                this.post.dislikes.splice(index,1);
              }
            }
          }
        })
        .catch()
      }
    },
    dislike(){
      let user = jwt.decode(this.$cookies.get("jwt").access_token)._id;
      if(!this.post.dislikes.includes(this.user)){
        this.$http
        .post("dislike",{message_id:this.post._id})
        .then(res=>{
          if(res.status==200){
            if(res.data.success){
              this.post.dislikes.push(this.user);
              let index = this.post.likes.indexOf(this.user);
              if(this.post.likes.includes(this.user)){
                this.post.likes.splice(index,1);
              }
            }
          }
        })
        .catch()
      }
    }
  },
  mounted(){
    context=this;
  }
};
</script>

<style scoped>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.justify {
  text-align: justify !important;
}

.card:hover {
  background-color: #f5f4f2 !important;
}


a.card-footer-item i{
  margin-left: 10px;
  font-size: 20px;
}
</style>
