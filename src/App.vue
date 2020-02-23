<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <!-- <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a> -->

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
              <h5 v-if="this.$route.name != 'login'">Hello, titanabrian !</h5>
            </div>
            <div class="buttons">
              <a class="button is-primary" v-if="this.$route.name != 'login'">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
