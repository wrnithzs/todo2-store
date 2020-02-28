import Vue from 'vue'
import Vuex from 'vuex'
// const db = require('../firebase')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        task: 'Buy food at the supermarket.',
        detail: 'AAAA'
      },
      {
        id: 2,
        task: ' "Organize the living room',
        detail: 'BBBB'
      }
    ]
  },
  mutations: {
    'ADD_TODO' (state, payload) {
      var newTodo = {
        id: payload.id,
        task: payload.task,
        detail: payload.detail
      }
      state.todos.push(newTodo)
    },
    'DELETE_TODO' (state, index) {
      state.todos.splice(index, 1)
    }
  },
  // 'EDIT_TODO' (state, payload) {
  //   state.todos = state.todos.map(todo => {
  //     if (todo.id === payload.id) {
  //       return Object.assign({}, todo, payload.data)
  //     }
  //     return todo
  //   })
  // },
  // 'UPDATE_TODO' (state, payload) {
  //   Object.assign(state.todos[payload.index], { task: payload.task, detail: payload.detail })
  // },
  actions: {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    deleteTodo ({ commit }, index) {
      commit('DELETE_TODO', index)
    },
    editTodo ({ commit }, todo, index) {
      commit('UPDATE_TODO', todo, index)
    }
  },
  getters: {
    allTodos (state) {
      return state.todos
    }
  }
})
