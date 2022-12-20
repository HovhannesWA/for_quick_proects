<template>
  <div
    class="parent"
    @click="parent"
  >
    <h1>Parent</h1>
    <TestEventBubblingChild @on-click="parent2" />
  </div>
</template>

<script>
import TestEventBubblingChild from "./TestEventBubblingChild.vue";
export default {
  name: "TestEventBubbling",
  components: { TestEventBubblingChild },

  methods: {
    parent() {
      console.log("parent");
    },
    parent2() {
      console.log("parent2");
    },
  },
};
</script>

<style scoped>
.parent {
  background-color: green;
}
</style>
