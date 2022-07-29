<template>
  <h1>Parent Component</h1>
  <ChildTest />
</template>

<script>
import { defineAsyncComponent } from "vue";
// import ChildTest from "./ChildTest.vue";
const ChildTest = defineAsyncComponent(() => import('./ChildTest.vue'))
export default {
  name: "ParentTest",
  components: { ChildTest },

  created() {
    console.log("Parent Is Created");
  },

  mounted() {
    console.log("Parent is Mounted");
  },
};
</script>

<style></style>
