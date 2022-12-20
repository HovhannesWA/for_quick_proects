<template>
  <div class="child" @click="child">
    <h2>Child</h2>
    <TestEventBubblingSubChild @on-click="child2"/>
  </div>
</template>

<script>
import TestEventBubblingSubChild from "./TestEventBubblingSubChild.vue";
export default {
  name: "TestEventBubblingChild",
  components: { TestEventBubblingSubChild },

  methods: {
    child() {
      console.log("child");
    },
    child2() {
      console.log("child2");
    },
  },
};
</script>

<style scoped>
.child {
  background-color: pink;
}
</style>
