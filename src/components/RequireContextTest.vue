<template>
  <div>
    <ul>
      <li
        v-for="dynamic_component in dynamic_components"
        :key="dynamic_component.name"
      >
        <component :is="dynamic_component.name" />
      </li>
    </ul>
  </div>
</template>

<script>
const req = require.context("./../icons", true, /.vue$/);
let dynamicComponents = {};

req.keys().forEach((file_name) => {
  const name = file_name.split("/")[1].replace(".vue", "");
  const component = req(file_name).default;
  dynamicComponents[name] = component;
});
//console.log(dynamicComponents);

export default {
  name: "RequireContextTest",
  components: { ...dynamicComponents },

  data() {
    return {
      dynamic_components: { ...dynamicComponents },
    };
  },

  //   mounted() {
  //     console.log(this.$.components)
  //   }
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px;
}
ul li {
  list-style: none;
}
</style>
