<template>
  <div class="luxon_test">
    <p>Current Date</p>
    <div class="date">
      <p>{{ currentDate }}</p>
    </div>
    <p>Current Time</p>
    <div class="time">
      <p>{{ currentTime }}</p>
    </div>

    <div class="button_wrapper">
      <TheButton @onClick="getCurrentDate" />
    </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";
import TheButton from "@/UI/TheButton.vue";

export default {
  name: "LuxonTest",
  components: { TheButton },

  data() {
    return {
      currentDate: null,
      currentTime: null,
    };
  },

  methods: {
    getCurrentDate() {
      let date = new Date();
      this.currentDate = DateTime.fromJSDate(date).toFormat("dd / LLL / yyyy");
      this.currentTime = DateTime.fromJSDate(date).toFormat("HH:mm:ss");
    },
  },

  renderTracked(event) {
    console.log("tracked");
    console.log(event);
  },
  renderTriggered(event) {
    console.log("trigered");
    console.log(event);
  },

  created() {    
    this.getCurrentDate();
  },
};
</script>

<style>
.luxon_test {
  padding: 50px 0 0 0;
}
.date,
.time {
  background: white;
  border: 1px solid green;
  margin: 0 auto;
  width: 250px;
  height: 50px;
  font-size: 1.5em;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button_wrapper {
  margin-top: 50px;
}
</style>
