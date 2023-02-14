<template>
  <label class="custom-radio-swich-component" :class="{ on: modelValue }">
    <input @click="updateValue" type="checkbox" :value="modelValue" />
    <div class="swicher"></div>
  </label>
</template>

<script>
export default {
  name: "CustomRadioSwichComponent",

  props: ["modelValue"],

  methods: {
    updateValue(e) {
      let isChecked = e.target.checked
      this.$emit("update:modelValue", isChecked);
    },
  },
};
</script>

<style>
label {
  position: relative;
  display: block;
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 40px;
  padding: 1px;
  cursor: pointer;
}

label.on {
  background-color: #27aede;
}

label input {
  display: none;
}

label .swicher {
  position: absolute;
  left: 1px;
  background-color: white;
  height: 18px;
  width: 18px;
  border-radius: 100%;
  transition: left 0.4s linear;
}

label input:checked + .swicher {
  left: 21px;
}
</style>
