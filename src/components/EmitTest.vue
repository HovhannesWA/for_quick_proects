<template>
  <h1 @click="onClick">
    Emit
  </h1>
</template>

<script>
export default {
name: "EmitTest",

methods: {
    onClick() {
        this.$emit('handleClick', 8,88,888)
    }
}
}
</script>

<style>

</style>