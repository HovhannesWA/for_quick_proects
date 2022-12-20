<template>
  <div>
    <h1>Compare lodash n lodash-ec</h1>
  </div>
</template>
  
  <script>
  import { isEmpty } from "lodash-es";
  export default {
    name: "LodashTest",
  
    created() {
      let obj = {name: 'John'}
      let obj2 = {}
      console.log(isEmpty(obj));
      console.log(isEmpty(obj2));
    }
  };
  </script>
  