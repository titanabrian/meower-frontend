<template>
  <div class="container column is-three-fifths">
    <PostInput />
    <div>
      <hr class="sparator" />
    </div>
    <div>
      <Post v-for="i in 100" :key="i" :allow_reply="true" />
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
import PostInput from "@/components/PostInput";
export default {
  name: "home",
  components: {
    Post,
    PostInput
  }
};
</script>

<style>
.sparator {
  margin-top: 45px;
}
</style>
