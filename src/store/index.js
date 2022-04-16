import { createStore } from "vuex";
import { cart } from "./cart";

// const store = createStore({
// 	modules: {

// 	}
// });

export default createStore({
  modules: {
    cart: cart,
  },
});
