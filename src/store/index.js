import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import posts from "./modules/posts";
import custom_treeselect_data from "./modules/custom_treeselect_data"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    posts,
    custom_treeselect_data
  },
});
