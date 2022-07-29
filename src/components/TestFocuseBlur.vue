<template>
  <div>
    <div class="wrapper">
      <input
        v-model="input_value"
        data-data_key="9"
        type="text"
        class="input-field"
        @blur="onBlur"
      >
      <div
        data-data_key="9"
        class="btn"
        @click="onClick()"
      />
    </div>
    <div
      v-for="(i, index) in t"
      :key="index"
    >
      {{ 8 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TestFocuseBlur",

  data() {
    return {
      nnn: 0,
      input_value: "test",
      t: {},
      ttt: { a: 8, b: 90 },
    };
  },

  methods: {
    onBlur(e) {
      let r = ++this.nnn;
      let key = "t" + e.target.dataset.data_key;
      this.t[key] = setTimeout(() => {
        console.log(r);
      }, 2000);
    },

    onClick(e) {
      let key = "t" + e.target.dataset.data_key;
      clearTimeout(this.t[key]);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: inline-flex;
  position: relative;
}

.input-field {
  border: 2px solid green;
  padding: 15px;
}

.btn {
  background: green;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
}
</style>
