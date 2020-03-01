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
        task: 'Organize the living room',
        detail: 'BBBB'
      }
    ]
  },
  mutations: {
    'ADD_TODO' (state, todo) {
      // var newTodo = {
      //   id: todo.id,
      //   task: todo.task,
      //   detail: todo.detail
      // }
      console.log('aaa')
      state.todos.push(todo)
    },
    'DELETE_TODO' (state, index) {
      state.todos.splice(index, 1)
      console.log(index)
    },
    'EDIT_TODO' (state, edittodo) {
      var index = state.todos.findIndex(item => item.id === edittodo.id)
      state.todos[index] = edittodo
    }

  },
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
    editTodo ({ commit }, edittodo) {
      commit('EDIT_TODO', edittodo)
    }
  },
  getters: {
    allTodos (state) {
      return state.todos
    }
  }
})
