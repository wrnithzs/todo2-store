import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
    // editingTodo: undefined
  },
  mutations: {
    'SET_TODO' (state, todos) {
      state.todos = todos
    },
    'SET_EDITING_TODO' (state, todo) {
      state.editingTodo = todo
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
    async addTodo ({ commit }, todo) {
      try {
        await db.collection('todos').add({
          task: todo.task,
          details: todo.details
        })
        console.log('Document successfully written')
        return 'Document successfully written'
      } catch {
        console.error('Error writing document')
      }
    },
    async deleteTodo ({ commit }, todoID) {
      try {
        await db.collection('todos')
          .doc(todoID)
          .delete()
        console.log('delete success')
        return 'delete success'
      } catch {
        console.log('delete error')
      }
    },
    async loadTodos ({ commit }) {
      try {
        const todolist = []
        const querySnapshot = await db.collection('todos').get()
        querySnapshot.forEach(function (doc) {
          const todo = {
            id: doc.id,
            task: doc.data().task,
            details: doc.data().details
          }
          todolist.push(todo)
        })
        commit('SET_TODO', todolist)
        return 'load success'
      } catch {
        console.log('loaddata error')
      }
    },
    moveup ({ commit }, index) {
      commit('MOVEUP_TODO', index)
    },
    movedown ({ commit }, index) {
      commit('MOVEDOWN_TODO', index)
    },
    async getTodoDetail ({ commit }, todoID) {
      const doc = await db.collection('todos').doc(todoID).get()
      if (doc.exists) {
        return doc.data()
      }
    },
    async updateTodo ({ commit }, todo) {
      try {
        await db.collection('todos').doc(todo.id).set({
          task: todo.task,
          details: todo.details
        })
        console.log('update success!')
        return 'update success!'
      } catch {
        console.log('update error!')
        return 'update error!'
      }
    }
  },
  getters: {
    allTodos (state) {
      return state.todos
    }
  }
})
