import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import animated from "animate.css";
import "animate.css";
import "wowjs/css/libs/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faHome,
    faUser,
    faClipboard,
    faLaptop,
    faImages,
    faEnvelope,
    faArrowCircleLeft,
    faMapMarkerAlt,
    faPhone,
    
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faWhatsapp,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
library.add(
    faHome,
    faUser,
    faClipboard,
    faLaptop,
    faImages,
    faEnvelope,
    faArrowCircleLeft,
    faMapMarkerAlt,
    faPhone,
    faFacebook,
    faTwitter,
    faWhatsapp,
    faInstagram
    );
const app=createApp(App);
app.use(store);
app.use(router);
app.component('fa-icon',FontAwesomeIcon);
app.use(animated);
app.mount("#app");
