<template>
    <div>
        <b-field label="" style="margin:0 !important">
            <b-input maxlength="200" type="textarea" placeholder="What's happening?"></b-input>
        </b-field>
        <b-button class="btn-post" type="is-primary">Post</b-button>
    </div>
</template>

<script>
    export default {
        name:"post.input",
    }
</script>

<style scoped>
    .btn-post{
        position:absolute;
        right:0px !important;
        margin-right:12px;
    }
</style>