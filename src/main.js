import { createApp } from 'vue';

import App from "./App.vue";
import store from "./store/index.js";

import "@/plugins/index";

const app = createApp(App);
app.use(store);
app.config.productionTip = false;

app.mount('#app');