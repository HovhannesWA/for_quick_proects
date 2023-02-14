<template>
  <div v-if="users">
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
      >
        {{ user.name }}
      </li>
    </ul>

    <div>
      <button @click="getUsers()">
        Get Users
      </button>
    </div>
  </div>
</template>

<script setup>
let getData = async () => {
  let jsonData = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await jsonData.json();
  return users;
}

getData();


async function getUsers() {
  users = null;
  jsonData = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await jsonData.json();
}
</script>

<!-- <script>
export default {
  data() {
    return {
      users: [],
    };
  },

  methods: {
    async getUsers() {
      const jsonData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await jsonData.json();
      this.users = users;
    },
  },

  created() {
    this.getUsers();
  },
};
</script> -->

<style></style>
