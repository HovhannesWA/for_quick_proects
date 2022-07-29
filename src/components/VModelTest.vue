<template>
  <input
    type="text"
    :value="modelValue"
    @input="onInput"
  >
  <input
    type="text"
    :value="title"
    @input="onInput2"
  >
</template>

<script>
export default {
  props: ["modelValue", "title", "modelModifiers", "titleModifiers"],
  emits: ["update:modelValue", "update:title"],

  created() {
    console.log(this.modelModifiers, this.titleModifiers);
  },

  methods: {
    onInput(e) {      
      console.log(e.target.value);
      this.$emit("update:modelValue", e.target.value);
    },

    onInput2(e) {      
      console.log(e.target.value);
      this.$emit("update:title", e.target.value);
    },
  }
};
</script>

<style></style>
