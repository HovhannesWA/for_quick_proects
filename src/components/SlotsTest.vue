<template>
  <div @click="onClick">
    <h1>Slots</h1>
    <div>
      <slot name="header">
        Header
      </slot>
    </div>
    <div>
      <slot>Default</slot>
    </div>
    <div>
      <slot
        name="footer"
        :footerProp="28000"
      >
        Footer
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlotsTest",
  props: ["value"],
  emits: ["click"],

  created() {
    console.log(this.value);
  },

  methods: {
    onClick() {
      this.$emit("click");
    },
  }
};
</script>

<style></style>
