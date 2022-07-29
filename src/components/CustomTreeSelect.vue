<template>
  <div @click="toogle">
    <div
      v-for="option in options"
      :key="option.id"
      class="menu"
      :class="['deepth-level-' + deepth_level, { open: option.open }]"
    >
      <p>{{ option.text }}</p>
      <div>
        <div
          v-for="item in option.nestedArr"
          :key="item.id"
          class="select-option"
        >
          {{ item.label }}
          <template v-if="item.nestedArr">
            <custom-tree-select
              :options="item.nestedArr"
              :deepth_level="deepth_level + 1"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomTreeSelect",
  props: ["options", "deepth_level"],

  data() {
    return {};
  },

  methods: {
    toogle() {
      this.$emit("toogle_menu_status", !this.options.open);
    },
  },
};
</script>
<style scoped lang="css"></style>
