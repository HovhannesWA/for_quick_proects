<template>
  <div @click="toggle">
    Toggle
  </div>
  <AsyncComponentChild v-if="show" />
</template>

<script>
import { defineAsyncComponent } from "vue";
const AsyncComponentChild = defineAsyncComponent(() =>
  import('./AsyncComponentChild.vue')
)
// import AsyncComponentChild from "./AsyncComponentChild.vue";
export default {
  name: "AsyncCompoonent",
  components: { AsyncComponentChild },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style></style>
