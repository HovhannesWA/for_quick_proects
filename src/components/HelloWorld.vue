<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="post">
      <span> {{ post.id }} </span>
      <span> {{ post.message }} </span>
    </div>
    <hr />
    <button @click="addNewPost">Add</button>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      //posts: [],
    };
  },

  computed: {
    posts() {
      return this.$store.getters["auth/posts"];
    },
    lastId() {
      return this.posts[this.posts.length - 1].id;
    },
  },

  methods: {
    addNewPost() {
      let id = this.lastId + 1;
      let posts = [...this.posts, { id, message: `post-${id}` }];
      this.$store.dispatch("auth/setPosts", { posts });
    },
  },

  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
  },

  updated() {
    console.log("updated");
  },
};
</script>

<style>
.post {
  display: flex;
  gap: 20px;
}

.post span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 25px;
  border: 2px solid green;
  margin: 5px 0;
}
</style>
