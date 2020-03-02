import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from '../firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        index: '0',
        task: 'Buy food at the supermarket.',
        detail: 'AAAA'
      },
      {
        index: '1',
        task: 'Organize the living room',
        detail: 'BBBB'
      }
    ]
  },
  // firestore () {
  //   return {
  //     todos: db.collection('todos')
  //   }
  // },
  mutations: {
    'ADD_TODO' (state, payload) {
      // var newTodo = {
      //   id: todo.id,
      //   task: todo.task,
      //   detail: todo.detail
      // }
      state.todos.push(payload)
    },
    'DELETE_TODO' (state, index) {
      state.todos.splice(index, 1)
      console.log(index)
    },
    'EDIT_TODO' (state, payload) {
      // console.log(state.todos[editindex])
      console.log('store index')
      console.log(payload)
      state.todos.splice(payload.index, 1, payload)
      // console.log(state.todos[editindex])
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
    },
    uploadTodo ({ commit }, edittodo) {
      commit('UPLOAD_TODO', edittodo)
    }
  },
  getters: {
    allTodos (state) {
      return state.todos
    }
  }
})
