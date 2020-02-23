<template>
  <div class="container column is-three-fifths">
    <Post />
    <PostInput />
    <div>
      <hr class="sparator" />
    </div>
    <div>
      <Post v-for="i in 100" :key="i" />
    </div>
  </div>
</template>
<script>
import Post from "@/components/Post";
import PostInput from "@/components/PostInput";
export default {
  name: "post.detail",
  components: {
    Post,
    PostInput
  }
};
</script>
