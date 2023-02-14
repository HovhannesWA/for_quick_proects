import { createApp } from 'vue';
import "./../main.css";

import App from "./App.vue";
import store from "./store/index.js";

import { translation } from "@/plugins/index";

const app = createApp(App);

app.use(store);
app.use(translation);
app.config.productionTip = false;

app.mount('#app');