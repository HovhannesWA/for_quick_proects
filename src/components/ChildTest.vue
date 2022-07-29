<template>
  <h1>Child</h1>
</template>

<script>
export default {
  name: "ChildTest",
  created() {
    console.log("Child Is Created");
  },

  mounted() {
    console.log("Child is Mounted");
  },
};
</script>

<style></style>
