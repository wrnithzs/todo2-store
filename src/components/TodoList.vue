<template>
  <div>
    <ul>
      <h1>show todos</h1>
      <li v-for=" (todo, index) in allTodos" :key="todo.id" class="card mb-1">
        <div class="card-body">
          <p class="card-title">Task:{{index + 1}} {{todo.task}} </p>
          <p class="card-text">detail: {{todo.details}}</p>
          <div class="row-center">
            <div class="col-auto-mr-auto">
              <!-- button in list op-->
              <button
                v-on:click="dele(todo)"
                type="button"
                class="btn btn-danger"
              >Delete</button>&nbsp;
             <router-link :to="{name: 'Edit', params: { id: todo.id, task: todo.task, details: todo.details} }"
              class="btn btn-warning" >Edit</router-link>&nbsp;
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
      loadTodos: 'loadTodos'
    }),
    dele (todo) {
      console.log('hello')
      console.log(todo.id)
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
