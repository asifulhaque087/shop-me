export const cart = {
  state: () => ({
    cartProducts: [],
    counter: 0,
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
    },

    increment(state, id) {
      const index = state.cartProducts.findIndex((object) => {
        return object.id === id;
      });
      state.cartProducts[index].quantity++;
    },

    decrement(state, id) {
      const index = state.cartProducts.findIndex((object) => {
        return object.id === id;
      });

      state.cartProducts[index].quantity--;
      if (state.cartProducts[index].quantity <= 0) {
        state.cartProducts.splice(index, 1);
      }
    },

    remove(state, id) {
      const index = state.cartProducts.findIndex((object) => {
        return object.id === id;
      });
      state.cartProducts.splice(index, 1);
    },

    clear(state) {
      state.cartProducts = [];
    },
  },

  getters: {
    getCartProducts(state) {
      return state.cartProducts;
    },
  },
};
