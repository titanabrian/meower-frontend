<template>
  <div>
    <b-field label="" style="margin:0 !important">
      <b-input
        maxlength="200"
        type="textarea"
        v-model="text"
        placeholder="Meow meow ?"
      ></b-input>
    </b-field>
    <b-button class="btn-post" type="is-primary" @click="post()">Post</b-button>
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions} from "vuex";
export default {
  name: "post.input",
  data(){
    return{
      text:""
    }
  },
  props:[
    "parent"
  ],
  methods:{
    ...mapActions(["addMessage"]),
    post(){
      if(this.parent!=null){
        this.addMessage({text:this.text,parent:this.parent})
      }else{
        this.addMessage({text:this.text});
      }
      this.text=""
    }
  }
};
</script>

<style scoped>
.btn-post {
  position: absolute;
  right: 0px !important;
  margin-right: 12px;
}
</style>
