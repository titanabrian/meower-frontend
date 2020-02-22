<template>
    <div class="container column is-two-fifths">
        <div class="card">
            <header class="card-header">
            <p class="card-header-title">Welcome to Meower</p>
        </header>
        <Signin v-if="this.form=='signin'"/>
        <Register v-if="this.form=='register'"/>
        <footer class="card-footer">
            <a @click="form='signin'" class="card-footer-item">Sign In</a>
            <a @click="form='register'" class="card-footer-item">Register</a>
        </footer>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import Signin from "@/components/LoginForm";
import Register from "@/components/RegisterForm";
export default{
    name:"login",
    components:{
        Signin,
        Register
    },
    data(){
        return{
            form:"signin"
        }
    }
}
</script>