<template>
  <h1>Test Suspense</h1>
  <Suspense>
    <SuspenseChild />
    <!-- loading state via #fallback slot -->
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import SuspenseChild from "./small_components/SuspenseChild.vue";
export default {
  name: "SuspenseTest",
  components: { SuspenseChild },
};
</script>

<style></style>
