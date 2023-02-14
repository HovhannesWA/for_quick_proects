<template>
  <div class="sub_child" @click="subChild">
    <h2>Sub Child</h2>
  </div>
</template>

<script>
export default {
  name: "TestEventBubblingSubChild",

  emits: ["on-click"],

  methods: {
    subChild() {
      console.log("sub child");
      this.$emit("on-click");
    },
  },
};
</script>

<style scoped>
.sub_child {
  background-color: lightblue;
}
</style>
