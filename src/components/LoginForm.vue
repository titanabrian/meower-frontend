<template>
    <div class="card-content">
        <b-field label="Username">
            <b-input></b-input>
        </b-field>
        <b-field label="Password">
            <b-input></b-input>
        </b-field>
        <b-button class="btn-post" type="is-primary">Login</b-button>
    </div>
</template>
<script>
    export default{
        name:"login.form"
    }
</script>