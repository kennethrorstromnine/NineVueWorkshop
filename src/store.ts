import Vue from 'vue';
import Vuex from 'vuex';
import {todoService} from '@/services/todo.service';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    allTodos: (state) => {
      return [...state.todos];
    }
  },
  mutations: {
    updateTodos: (state, todos) => {
      state.todos = todos;
    }
  },
  actions: {
    'FETCH_TODOS': ({commit}) => {
      const liste = todoService.hentListen();
      commit('updateTodos', liste);
    }
  },
});
