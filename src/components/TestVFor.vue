<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="wrapper"
      @click.self="test"
    >
      <span>{{ index }}</span>
      <span>{{ item.name }}</span>
    </div>

    <hr>

    <input
      v-model="inputValue"
      type="checkbox"
      true-value="yes"
      false-value="no"
    >
    <p
      id="input_value"
      ref="input_value"
    >
      {{ inputValue }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "First" },
        { id: 2, name: "Second" },
      ],

      inputValue: null,
    };
  },

  watch: {
    inputValue: {
      handler(a, b, c) {
        let el = document.getElementById('input_value');
        console.log(this.$refs.input_value);
        console.log(el);
      },
      flush: 'post'
    }
    // inputValue() {
    //   let el = document.getElementById("input_value");
    //   console.log(this.$refs.input_value);
    //   console.log(el);
    // },
  },

  methods: {
    test() {
      console.log(event);
    },
  },
};
</script>

<style>
.wrapper {
  border: 2px solid green;
}
</style>
