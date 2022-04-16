export const cart = {
  // namespaced: true,

  state: () => ({
    // cartProducts: [],
    cartProducts: JSON.parse(localStorage.getItem("cartProducts")) || [],
  }),

  //   actions: {
  //     nextSong({ commit, state }) {
  //       let nextIndex = state.activeIndex + 1;

  //       commit("setActiveIndex", nextIndex);
  //       commit("setActiveSong", state.songs[nextIndex]);
  //     },
  //   },

  mutations: {
    addToCart(state, product) {
      const index = state.cartProducts.findIndex((object) => {
        return object.id === product.id;
      });

      if (index > -1) {
        state.cartProducts[index].quantity++;
      } else {
        product = { ...product, quantity: 1 };
        state.cartProducts.push(product);
      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    increment(state, id) {
      const index = state.cartProducts.findIndex((object) => {
        return object.id === id;
      });
      state.cartProducts[index].quantity++;
      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    decrement(state, id) {
      const index = state.cartProducts.findIndex((object) => {
        return object.id === id;
      });

      state.cartProducts[index].quantity--;
      if (state.cartProducts[index].quantity <= 0) {
        state.cartProducts.splice(index, 1);
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    remove(state, id) {
      const index = state.cartProducts.findIndex((object) => {
        return object.id === id;
      });
      state.cartProducts.splice(index, 1);

      localStorage.setItem("cartProducts", JSON.stringify(state.cartProducts));
    },

    clear(state) {
      state.cartProducts = [];
      localStorage.removeItem("cartProducts");
    },
  },

  getters: {
    // getCartProducts(state) {
    //   return state.cartProducts;
    // },
    getCartTotal(state) {
      let total = state.cartProducts.reduce((acc, product) => {
        price = product.price * product.quantity;
        return acc + price;
      }, 0);
      console.log("total is ", total);
      return total
    },
  },
};
