<template>
  <!-- dont work -->
  <div v-cloak>
    <span>Loading...</span>
  </div>

  <ul>
    <li v-for="todo in todos" key="todo.id">
      {{ todo.title }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

let todos = ref(null);

const getData = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const data = await res.json();
  todos.value = data;
};

getData();
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
