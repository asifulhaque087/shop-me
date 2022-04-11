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
import {
  faFacebookSquare,
  faFlickr,
  faGooglePlusSquare,
  faInstagramSquare,
  faLinkedin,
  faPinterestSquare,
  faTwitterSquare,
  faVimeoSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

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
  faCaretDown,
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare,
  faPinterestSquare,
  faYoutubeSquare,
  faVimeoSquare,
  faInstagramSquare,
  faLinkedin,
  faFlickr
);

createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
