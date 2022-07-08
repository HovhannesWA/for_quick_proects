<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <CustomTreeSelect :options="customTreeSelectOptions" :deepth_level="0" @toogle_menu_status="setTreeSelectOptions"/> -->
    <!-- <TestFocuseBlur /> -->
    <TestDirectiveVue />  
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HelloWorld from "./components/HelloWorld.vue";
import CustomTreeSelect from "./components/CustomTreeSelect";
import TestFocuseBlur from "./components/TestFocuseBlur.vue";
import TestDirectiveVue from "./components/TestDirective.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    CustomTreeSelect,
    TestFocuseBlur,
    TestDirectiveVue
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      customTreeSelectOptions: "custom_treeselect_data/options",
    }),
  },

  methods: {
    ...mapActions({
      setTreeSelectOptions: "custom_treeselect_data/SetOptions",
    }),

    setTreeSelectOptions(status) {
      console.log(status);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
