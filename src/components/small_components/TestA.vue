<template>
  <h1>Test-A</h1>
  <input type="text" v-model="a_value" />
</template>

<script>
export default {
  name: "TestA",
  data() {
    return {
      a_value: "",
    };
  },

  created(){
    console.log('A is creted');
  },

  mounted() {
    console.log('A is mounted');
  },

  unmounted() {
    console.log('A is unmounted');
  },

  activated(){
    console.log('A is activated');
  },

  deactivated(){
    console.log('A is deactivated');
  }
};
</script>

<style></style>
