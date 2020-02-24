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
        <a>{{Date(this.post.time)}}</a>
      </div>
    </div>
    <footer class="card-footer">
      <a @click="like()" class="card-footer-item">{{this.post.likes.length || 0}} Likes</a>
      <a @click="dislike()" class="card-footer-item">{{this.post.dislikes.length || 0}} Dislikes</a>
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
  methods:{
    like(){
      let user = jwt.decode(this.$cookies.get("jwt").access_token)._id;
      if(!this.post.likes.includes(user)){
        this.$http
        .post("like",{message_id:this.post._id})
        .then(res=>{
          if(res.status==200){
            if(res.data.success){
              this.post.likes.push(user);
              let index = this.post.dislikes.indexOf(user);
              this.post.dislikes.splice(index,1);
            }
          }
        })
        .catch()
      }
    },
    dislike(){
      let user = jwt.decode(this.$cookies.get("jwt").access_token)._id;
      if(!this.post.dislikes.includes(user)){
        this.$http
        .post("dislike",{message_id:this.post._id})
        .then(res=>{
          if(res.status==200){
            if(res.data.success){
              this.post.dislikes.push(user);
              let index = this.post.likes.indexOf(user);
              this.post.likes.splice(index,1);
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
.justify {
  text-align: justify !important;
}

.card:hover {
  background-color: #f5f4f2 !important;
}
</style>
