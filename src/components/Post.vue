<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        @{{this.user.username}}
      </p>
    </header>
    <div class="card-content">
      <div class="content justify">
        {{this.text}}
        <br/>
        <a>{{Date(this.time)}}</a>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">100 Likes</a>
      <a href="#" class="card-footer-item">200 Dislikes</a>
      <a
        :href="'/post/'+this._id"
        class="card-footer-item"
        v-if="this.allow_reply"
        >Reply</a
      >
    </footer>
  </div>
</template>
<script>
export default {
  name: "post",
  props: ["allow_reply","text","time","likes","dislikes","replies","user","_id"]
};
</script>

<style scoped>
.justify {
  text-align: justify !important;
}

.card:hover {
  background-color: #f5f4f2 !important;
}
</style>
