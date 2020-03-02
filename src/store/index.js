import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from '../firebase'
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
  // firestore () {
  //   return {
  //     todos: db.collection('todos')
  //   }
  // },
  mutations: {
    'ADD_TODO' (state, todo) {
      // var newTodo = {
      //   id: todo.id,
      //   task: todo.task,
      //   detail: todo.detail
      // }
      state.todos.push(todo)
    },
    'DELETE_TODO' (state, index) {
      state.todos.splice(index, 1)
      console.log(index)
    },
    'EDIT_TODO' (state, edittodo, index) {
      state.todos[index] = edittodo
      console.log('store edit')
      console.log(edittodo)
    }
    // 'LOAD_TODO' (state, todo) {
    //   state.todos = todo
    // }

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
    editTodo ({ commit }, edittodo, index) {
      commit('EDIT_TODO', edittodo, index)
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
