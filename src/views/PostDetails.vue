<template>
  <div class="container column is-three-fifths">
    <div v-if="detailMessage.length>0">
      <Post :post="detailMessage[0]" :allow_reply="false" />
      <PostInput :parent="detailMessage[0]._id"/>
      <div>
        <hr class="sparator" />
      </div>
      <div>
        <Post v-for="replies in allMessages" :post="replies"  :key="replies._id" :allow_reply="false" />
      </div>
    </div>
    <div v-else>
      <h3>Opps, Some Thing Wong</h3>
    </div>
  </div>
</template>
<script>

import Post from "@/components/Post";
import PostInput from "@/components/PostInput";
import {mapActions,mapGetters} from "vuex";
export default {
  name: "post.detail",
  components: {
    Post,
    PostInput
  },
  
  methods:{
    ...mapActions(["fetchReplies","fetchDetail"])
  },
  computed:mapGetters(["allMessages","detailMessage"]),
  created(){
    this.fetchReplies(this.$route.params.id);
    this.fetchDetail(this.$route.params.id);
  }

};
</script>
