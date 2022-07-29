<template>
  <div id="app">
    <!-- <HelloWorld
      msg="Welcome to Your Vue.js App"
      v-bind="test_obj"
    /> -->
    <!-- <CustomTreeSelect :options="customTreeSelectOptions" :deepth_level="0" @toogle_menu_status="setTreeSelectOptions"/> -->
    <!-- <TestFocuseBlur /> -->
    <!-- <TestDirectiveVue /> -->
    <!-- <TestVForVue /> -->
    <!-- <TestProps v-bind="test_obj" num_or_bool/> -->
    <!-- <EmitTestVue @handle-click="onClick" /> -->
    <!-- <VModelTest v-model.trim="vmodelText" v-model:title.trim="title"/> -->
    <!-- <FallthroughAttributesVue :title="title" :test_obj="test_obj" @click="onClick" /> -->
    <!-- <div>
      <SlotsTest
        :value="9"
        @click="
          selected_slot = selected_slot === 'header' ? 'footer' : 'header'
        "
      >
        OK
        <template #[selected_slot]="slotProps">
          <h1>New-Header</h1>
          <h2>{{ slotProps.footerProp }}</h2>
        </template>
      </SlotsTest>
    </div> -->
    <!-- <AsyncComponent /> -->
    <ParentTest />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HelloWorld from "./components/HelloWorld.vue";
import CustomTreeSelect from "./components/CustomTreeSelect";
import TestFocuseBlur from "./components/TestFocuseBlur.vue";
import TestDirectiveVue from "./components/TestDirective.vue";
import TestVForVue from "./components/TestVFor.vue";
import TestProps from "./components/TestProps.vue";
import EmitTestVue from "./components/EmitTest.vue";
import VModelTest from "@/components/VModelTest";
import FallthroughAttributesVue from "./components/FallthroughAttributes.vue";
import SlotsTest from "./components/SlotsTest.vue";
import TestVFor from "./components/TestVFor.vue";
import AsyncComponent from "./components/AsyncComponent.vue";
import ParentTest from "./components/ParentTest.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    CustomTreeSelect,
    TestFocuseBlur,
    TestDirectiveVue,
    TestVForVue,
    TestProps,
    EmitTestVue,
    VModelTest,
    FallthroughAttributesVue,
    SlotsTest,
    TestVFor,
    HelloWorld,
    AsyncComponent,
    ParentTest,
  },

  data() {
    return {
      test_obj: {
        name: "aaa",
        last_name: "bbbb",
        age: 888,
      },
      vmodelText: "a",
      title: "bbb",
      selected_slot: "header",
    };
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

    onClick() {
      console.log("click");
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
