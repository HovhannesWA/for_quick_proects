<template>
  <div>
    <div>      
      <!-- <i18n
        path="a_accept_the_terms_and_conditions"
        tag="p"
      >
        <template #termsUrl>
          <button @click="testLink">
            {{ $t('terms') }}
          </button>
        </template>
      </i18n> -->
    </div>
    <h1>{{ $tr('hello') }}</h1>
    <hr>
    <h1>{{ $tr('fruits.apple') }}</h1>
    <h1>{{ $tr('fruits.banana') }}</h1>
    <hr>
    <div
      v-for="post in posts"
      :key="post.id"
      class="post"
    >
      <span> {{ post.id }} </span>
      <span> {{ post.message }} </span>
    </div>
    <hr>
    <button @click="addNewPost">
      Add
    </button>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    name: String,
    last_name: String,
    age: Number,
    test_obj: Object
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

  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
    console.log(this.$props);
  },

  updated() {
    console.log("updated");
  },

  methods: {
    addNewPost() {
      let id = this.lastId + 1;
      let posts = [...this.posts, { id, message: `post-${id}` }];
      this.$store.dispatch("auth/setPosts", { posts });
    },

    testLink(){
      window.open('https://google.am')
    }
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