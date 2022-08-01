<template>
  <div>
    <KeepAlive include="TestB">
      <component :is="component" />
    </KeepAlive>
    <div>
      <button @click="toggle">Toggle</button>
    </div>
  </div>
</template>

<script>
import TestA from "./small_components/TestA.vue";
import TestB from "./small_components/TestB.vue";
export default {
  name: "KeepAliveTest",
  components: { TestA, TestB },
  data() {
    return {
      component: "TestA",
    };
  },
  methods: {
    toggle() {
      this.component = this.component === "TestA" ? "TestB" : "TestA";
    },
  }
};
</script>

<style></style>
