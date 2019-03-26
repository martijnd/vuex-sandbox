import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: ["Hello", "Good day"]
  },
  mutations: {
    addMessage(state, message) {
      state.messages = [...state.messages, message];
    }
  },
  actions: {
    addMessage({ commit }) {
      commit("addMessage");
    }
  }
});
