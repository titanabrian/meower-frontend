<template>
  <div class="card-content">
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
let context;
export default {
  name: "login.form",
  data(){
    return{
      username:"",
      password:""
    }
  },

  methods:{
    login(){
      let payload={
        username:context.username,
        password:context.password
      }

      context.$http
      .post(process.env.VUE_APP_SERVICE_HOST+"/auth/token",payload)
      .then(res=>{
        if(res.status===200){
          let data = res.data
          context.$cookies.set("jwt",{access_token:data.access_token,refresh_token:data.refresh_token})
          context.$router.push("/")
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    context=this;
  }
};
</script>
