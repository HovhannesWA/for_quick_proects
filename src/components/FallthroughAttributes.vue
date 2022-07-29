<template>
  <div @click="onClick">
    Fallthrough Attributes
  </div>
  <div>{{ $attrs }}</div>
  <FallthroughAttributesChild v-bind="$attrs" />
</template>

<script>
import FallthroughAttributesChild from '@/components/FallthroughAttributesChild';
export default {
  name: "FallthroughAttributes",
  components: { FallthroughAttributesChild },
//   props: ["test_obj"],
//   inheritAttrs: false,
  emits: ['click'],

  created() {
    console.log(this.$attrs);
  },

  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
