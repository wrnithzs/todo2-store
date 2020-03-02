<template>
  <div>
    <ul>
      <h1>show todos</h1>
      <li v-for=" (todo, index) in allTodos" :key="todo.id" class="card mb-1">
        <div class="card-body">
          <p class="card-title">Task:{{index + 1}} {{todo.task}}</p>
          <p class="card-text">detail: {{todo.details}}</p>
          <div class="row">
            <div class="col-auto-mr-auto">
              <router-link
                :to="{name: 'Edit', params: { id: todo.id, task: todo.task, details: todo.details} }"
                class="btn btn-warning"
              >Edit</router-link>&nbsp;
              <button v-on:click="del(todo)" type="button" class="btn btn-danger">Delete</button>&nbsp;
              &nbsp;
            </div>
            <div class="col-auto">
              <button
                v-if="index !== 0"
                v-on:click="moveup(index)"
                class="btn btn-outline-info"
              >Up</button>&nbsp;
              <button
                v-if="index !== allTodos.length-1"
                v-on:click="movedown(index)"
                class="btn btn-outline-info"
              >Down</button>
              <router-view />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TodoList',
  mounted () {
    this.loadTodos()
  },
  data () {
    return {
      todo: {
        id: '',
        task: '',
        details: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      allTodos: 'allTodos'
    })
  },
  methods: {
    ...mapActions({
      deleteTodo: 'deleteTodo',
      loadTodos: 'loadTodos',
      moveup: 'moveup',
      movedown: 'movedown'
    }),
    del (todo) {
      this.deleteTodo(todo.id)
      this.loadTodos()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
