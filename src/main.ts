import { createApp } from "vue";
import { vue3Debounce } from 'vue-debounce'
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import AppLayout from './layouts/AppLayout.vue';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

const app = createApp(App);

app.directive('debounce', vue3Debounce({ lock: true }))
app.use(createPinia());
app.use(router);
app.component('AppLayout', AppLayout);
app.component('VueSlickCarousel', VueSlickCarousel);

// const focus = {
//     beforeMount(el) {
//         console.log(el)
//     }
// }
app.directive('focus', {
    mounted(el, binding) {
        el.focus();
    }
})
app.mount("#app");
