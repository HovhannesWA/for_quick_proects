export default {
  namespaced: true,
  state: {
    posts: [
      { id: 1, message: "count-1" },
      { id: 2, message: "count-2" },
      { id: 3, message: "count-3" },
    ],
  },

  getters: {
    posts: (state) => state.posts,
  },

  mutations: {
    setPosts(state, payload) {
      state.posts = payload.posts;
    },
  },

  actions: {
    async setPosts(ctx, payload) {
      ctx.commit("setPosts", { posts: payload.posts });
    },
  },
};
