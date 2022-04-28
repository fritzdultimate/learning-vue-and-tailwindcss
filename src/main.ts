import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import AppLayout from './layouts/AppLayout.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('AppLayout', AppLayout);

app.mount("#app");
