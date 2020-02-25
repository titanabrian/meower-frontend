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
    <b-field label="Username">
      <b-input v-model="username"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" v-model="password"></b-input>
    </b-field>
    <b-button class="btn-post" type="is-primary" @click="login()">Login</b-button>
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
