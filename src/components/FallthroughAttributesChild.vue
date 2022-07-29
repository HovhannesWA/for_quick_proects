<template>
  <div>Fallthrough Attributes Child</div>
  <div>{{ $attrs }}</div>
</template>

<script>
export default {
  name: "FallthroughAttributesChild",  

  created() {
    console.log(this.$attrs);
  },
};
</script>

<style></style>
