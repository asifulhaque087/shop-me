export const cart = {
  state: () => ({
    songs: [],
    cartProducts: [],
    activeIndex: 1,
    activeSong: {},
    status: "paused",
  }),

  actions: {
    nextSong({ commit, state }) {
      let nextIndex = state.activeIndex + 1;

      commit("setActiveIndex", nextIndex);
      commit("setActiveSong", state.songs[nextIndex]);
    },
  },

  mutations: {
    addToCart(state, prdouct) {
      state.cartProducts.push(prdouct);
      //   console.log("prdouct is ", prdouct);
    },
    setActiveIndex(index) {
      state.activeIndex = index;
    },

    setActiveSong(song) {
      state.activeSong = song;
    },
  },

  getters: {
    getActiveIndex(state) {
      return state.activeIndex;
    },

    getActiveSong(state) {
      return state.activeSong;
    },

    getCartProducts(state) {
      return state.cartProducts;
    },
  },
};
