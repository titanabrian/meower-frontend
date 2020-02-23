<template>
  <div class="card-content">
    <b-field label="Username">
      <b-input v-model="username"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input v-model="password" type="password"></b-input>
    </b-field>
    <b-field label="Confirm Password">
      <b-input v-model="confirm" type="password"></b-input>
    </b-field>
    <b-button class="btn-post" @click="register()" type="is-primary">Register</b-button>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
let context;
export default{
    name:"register.form",
    data(){
        return {
            username:"",
            password:"",
            confirm:""
        }
    },
    methods:{
        register(){
            let payload={
                username:context.username,
                password:context.password,
                confirm:context.confirm
            }
            context.$http
            .post(process.env.VUE_APP_SERVICE_HOST+"/register",payload)
            .then((response)=>{
                if(response.status===200){
                    context.$notify({
                        group: "success",
                        title: "Success Notification",
                        text: "Success Add Data"
                    })
                    context.$emit("success_register",{payload});
                }
            })
        }
    },

    mounted(){
        context=this;
    }
}
</script>