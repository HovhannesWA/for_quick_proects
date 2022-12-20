<template>
  <div>
    <input
      type="text"
      :disabled="isDisabled"
    >
    <button @click="isDisabled = !isDisabled">
      Toggle
    </button>
  </div>
</template>

<script>
export default {
  name: "BooleanTest",

  data() {
    return {
      isDisabled: 0,
    };
  },
};
</script>
