<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <a class="navbar-item" href="/">
          <img :src="require('@/assets/logo.png')" height="70">
           <span class="meower-title">
             MEOWER
           </span>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="column">
              <h5 v-if="this.$route.name != 'login' && this.$route.name!='not_found'">Hello, {{this.currentUser.username}} !</h5>
            </div>
            <div class="buttons">
              <a class="button is-primary" @click="signout()" v-if="this.$route.name != 'login' && this.$route.name!='not_found'">
                <strong>Sign out</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
    <notifications 
    group="success"
    classes="vue-notification success"
    position="top right"
    />
    <notifications 
    group="error"
    classes="vue-notification error"
    position="top right"
    />
    <notifications 
    group="warning"
    classes="vue-notification warn"
    position="top right"
    />
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters,mapActions} from "vuex"; 
export default{
  name:"app",
  data(){
    return {
      ...mapActions(["fetchCurrentUser"])
    }
  },
  methods:{
    signout(){
      this.$cookies.remove("jwt");
      this.$router.push("/login");
    }
  },
  computed: mapGetters(["currentUser"]),
  mounted(){
    this.fetchCurrentUser();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.meower-title{
  margin-left:10px;
  font-weight: bold;
}
</style>
