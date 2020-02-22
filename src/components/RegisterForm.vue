<template>
    <div class="card-content">
        <b-field label="Username">
            <b-input></b-input>
        </b-field>
        <b-field label="Password">
            <b-input></b-input>
        </b-field>
        <b-field label="Confirm Password">
            <b-input></b-input>
        </b-field>
        <b-button class="btn-post" type="is-primary">Register</b-button>
    </div>
</template>
<script>
    export default{
        name:"register.form"
    }
</script>