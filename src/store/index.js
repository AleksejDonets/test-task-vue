import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../assets/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    package: {},
    selected: [],
    page: 0,
    searchValue: 'Vue',
    error: false
  },
  mutations: {
    saveBase(state, baseData) {
      state.package = baseData;
    },
    setSearchData(state, searchData) {
      state.package = searchData;
    },
    setTitle(state, title) {
      state.searchValue = title;
    },
    errorStatus(state) {
      state.error = true;
    }
  },
  actions: {
    loadBase({ commit }) {
      axios.get ('/package/npm/vue')
        .then((result) => {
          commit('saveBase', result.data);
        })
        .catch((error) =>{

          console.log(error);
        })
        .then(() => {
          commit('errorStatus')
        })

    },
    startSearch({commit}, searchQuery) {
      commit('setTitle', searchQuery);
       
      axios.get(`/package/npm/${searchQuery}`)
        .then(response => {
          commit('setSearchData', response.data);
        })
        .catch((error) =>{
          console.log(error);
        })
        .then(() => {
          commit('errorStatus')
        })
    }
  },
});
