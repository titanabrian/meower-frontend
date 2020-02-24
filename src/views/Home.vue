<template>
  <div class="container column is-three-fifths">
    <PostInput />
    <div>
      <hr class="sparator" />
    </div>
    <div>
      <Post v-for="message in allMessages" :post="message" :key="message._id"   :allow_reply="true" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Post from "@/components/Post";
import PostInput from "@/components/PostInput";
import {mapGetters,mapActions} from "vuex";
export default {
  name: "home",
  components: {
    Post,
    PostInput
  },
  methods:{
    ...mapActions(["fetchMessages"])
  },
  computed: mapGetters(["allMessages"]),
  created(){
    this.fetchMessages()
  }
};
</script>

<style>
.sparator {
  margin-top: 45px;
}
</style>
