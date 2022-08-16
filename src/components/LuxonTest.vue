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
  </div>
</template>

<script>
import { DateTime } from "luxon";
export default {
  name: "LuxonTest",

  data() {
    return {
      currentDate: null,
      currentTime: null,
    };
  },

  created() {
    let date = new Date();
    this.currentDate = DateTime.fromJSDate(date).toFormat("dd / LLL / yyyy");
    this.currentTime = DateTime.fromJSDate(date).toFormat("HH:mm");
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
</style>
