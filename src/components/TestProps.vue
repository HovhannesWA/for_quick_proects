<template>
  <div>
    <p>{{ value }}</p>
    <p>{{ last_name }}</p>
    <input
      v-model="value"
      type="text"
    >
    <hr>
    <p>{{ num_or_bool }}</p>
  </div>
</template>

<script>
export default {
  props: {
    last_name: String,
    num_or_bool: [String, Boolean],
  },

  data() {
    return {
      value: this.last_name,
    };
  },
};
</script>
