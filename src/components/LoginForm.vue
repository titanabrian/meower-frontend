<template>
  <div class="card-content">
    <b-notification
        v-if="error"
        type="is-danger"
        auto-close
        aria-close-label="Close"
        role="alert">
        {{this.error}}
    </b-notification>
      <form action="" @submit.prevent="login()">
        <b-field label="Username">
          <b-input v-model="username" v-focus></b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password" password-reveal v-model="password"></b-input>
        </b-field>
        <input class="button button is-primary" type="submit" @click="login()" value="Login">
      </form>
  </div>
</template>
<script>
/* eslint-disable */
let context;
import axios from "axios";
export default {
  name: "login.form",
  data(){
    return{
      username:"",
      password:"",
      error:""
    }
  },

  methods:{
    login(){
      this.error=""
      let payload={
        username:context.username,
        password:context.password
      }

      axios.post(process.env.VUE_APP_SERVICE_HOST+"/auth/token",payload)
      .then(res=>{
        if(res.status===200){
          let data = res.data
          context.$cookies.set("jwt",{access_token:data.access_token,refresh_token:data.refresh_token})
          window.location.replace("/")
        }else{
          context.$notify({
              group: "error",
              title: "Error Notification",
              text: "Internal Server Error"
          })
        }
      })
      .catch(err=>{
        context.error="Invalid Username or Password"
      })
    }
  },
  mounted(){
    context=this;
  }
};
</script>

<style scoped>
  .submit{
    cursor: pointer;
    justify-content: center;
    padding: calc(.375em - 1px) .75em;
    text-align: center;
    white-space: nowrap;
    background-color: #7957d5;
    border-color: transparent;
    color: #fff;
  }
</style>
