import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      // {
      //   // index: '0',
      //   id: '',
      //   task: 'Buy food at the supermarket.',
      //   detail: 'AAAA'
      // },
      // {
      //   // index: '1',
      //   id: '',
      //   task: 'Organize the living room',
      //   detail: 'BBBB'
      // }
    ]
  },
  firestore () {
    return {
      todos: db.collection('todos')
    }
  },
  mutations: {
    'ADD_TODO' (state, payload) {
      // state.todos.push(payload)
      db.collection('todos').add({
        task: payload.task,
        details: payload.details
      })
        .then(payload.task = '', payload.details = '')
      console.log('saved !!')
    },
    'DELETE_TODO' (state, payload) {
      db.collection('todos')
        .doc(payload)
        .delete()
        .then(function () {})
        .catch(function (error) {
          console.error('Error removing document: ', error)
        })
      console.log('deleted!! ' + payload.id)
    },
    'EDIT_TODO' (state, payload) {
      // console.log(state.todos[ed])
      console.log(state.todos[payload.index])
      console.log('store index')
      console.log(payload)
      state.todos[payload.index] = payload
      // state.todos.splice(payload.index, 1, payload)
      // console.log(state.todos[editindex])
    },
    'LOAD_TODO' (state) {
      const todolist = []
      db.collection('todos')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            const todo = {
              id: doc.id,
              task: doc.data().task,
              details: doc.data().details
            }
            todolist.push(todo)
          })
        })
      state.todos = todolist
      console.log(state.todos)
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    deleteTodo ({ commit }, todo) {
      commit('DELETE_TODO', todo)
    },
    editTodo ({ commit }, edittodo) {
      commit('EDIT_TODO', edittodo)
    },
    loadTodos ({ commit }) {
      commit('LOAD_TODO')
    }
  },
  getters: {
    allTodos (state) {
      return state.todos
    }
  }
})
