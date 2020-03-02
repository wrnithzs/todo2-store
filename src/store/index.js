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
      db.collection('todos').add({
        task: payload.task,
        details: payload.details
      })
        .then(payload.task = '', payload.details = '', console.log('Document successfully written!'))
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    'DELETE_TODO' (state, payload) {
      db.collection('todos')
        .doc(payload)
        .delete()
        .then(function () {})
        .catch(function (error) {
          console.error('Error removing document: ', error)
        })
      console.log('deleted!! ' + payload)
    },
    'EDIT_TODO' (state, payload) {
      db.collection('todos')
        .doc(payload.id)
        .update({
          task: payload.task,
          details: payload.details
        })
        .then(function () {
          console.log('Document successfully updated!')
        })
        .catch(function (error) {
          console.error('Error updating document: ', error)
        })
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
    },
    'MOVEUP_TODO' (state, index) {
      if (index === 0) {
        return null
      }
      const todo = state.todos[index]
      state.todos.splice(index, 1)
      state.todos.splice(index - 1, 0, todo)
    },
    'MOVEDOWN_TODO' (state, index) {
      if (index === state.todos.length - 1) {
        return null
      }
      const todo = state.todos[index]
      state.todos.splice(index, 1)
      state.todos.splice(index + 1, 0, todo)
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
    },
    moveup ({ commit }, index) {
      commit('MOVEUP_TODO', index)
    },
    movedown ({ commit }, index) {
      commit('MOVEDOWN_TODO', index)
    }
  },
  getters: {
    allTodos (state) {
      return state.todos
    }
  }
})
