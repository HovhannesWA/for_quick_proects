<template>
  <h1>Test-B</h1>
  <input
    v-model="b_value"
    type="text"
  >
</template>

<script>
export default {
  name: "TestB",
  data() {
    return {
      b_value: "",
    };
  },

  created(){
    console.log('B is creted');
  },

  mounted() {
    console.log('B is mounted');
  },

  unmounted() {
    console.log('B is unmounted');
  },

  activated(){
    console.log('B is activated');
  },

  deactivated(){
    console.log('B is deactivated');
  }
};
</script>

<style></style>
