import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBars,
  faList,
  faHeart,
  faShoppingCart,
  faSearch,
  faMapLocation,
  faPhone,
  faMailReply,
  faArrowsUpDownLeftRight,
  faCaretDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// import { faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(
  faUser,
  faBars,
  faList,
  faHeart,
  faShoppingCart,
  faSearch,
  faMapLocation,
  faPhone,
  faEnvelope,
  faArrowsUpDownLeftRight,
  faCaretDown
);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
