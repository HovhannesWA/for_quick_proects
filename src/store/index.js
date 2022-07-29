import { createStore } from "vuex";

import auth from "./modules/auth";
import posts from "./modules/posts";
import custom_treeselect_data from "./modules/custom_treeselect_data";


export default createStore({
  modules: {
    auth,
    posts,
    custom_treeselect_data,
  },
});
