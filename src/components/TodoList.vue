<template>
  <div>
    <ul>
      <div v-if="showTodolist">
      <h1>show todos</h1>
      <li v-for=" (todo, index) in allTodos" :key="todo.id" class="card mb-1">
        <div class="card-body">
          <p class="card-title">Task:{{index + 1}} {{todo.task}}</p>
          <p class="card-text">detail: {{todo.details}}</p>
          <div class="row-center">
            <div class="col-auto-mr-auto">
              <!-- button in list op-->
              <button
                v-on:click="deleteTodo(todo.id)"
                type="button"
                class="btn btn-danger"
              >Delete</button>&nbsp;
              <!-- <button
                v-on:click="edit(index)"
                type="button"
                class="btn btn-warning"
              >Edit</button>&nbsp; -->
              <!-- button in list end -->
             <router-link :to="{name: 'Edit', params: { id: todo.id, task: todo.task, detail: todo.details} }"
              class="btn btn-warning" >Edit</router-link>&nbsp;
            </div>
          </div>
        </div>
      </li>
    </div>
      <div v-if="showAddInput">
      <input  type="text" placeholder="Enter a new Task" v-model="todo.task"  />&nbsp;
      <input  type="text" placeholder="Enter a new Details" v-model="todo.details"  /><br><br>
      <button class="btn btn-info" @click="save">Add Todos</button>
      <br>
      </div>
    </ul>
    <!-- out of list  add new todo-->
        <!-- edit section -->
        <!-- <div v-if="showEdit">
        <div class="form-group">
          <label > Edit Input ID</label>
          <input type="text" v-model="edittodo.id" class="form-control" />
          <br />
          <label > Edit Input Todo</label>
          <input type="text" v-model="edittodo.task" class="form-control" />
          <br />
          <label>Edit Details</label>
          <input type="text" v-model="edittodo.detail" class="form-control" />
        </div>
        <button
          v-on:click="update"
          type="button"
          class="btn btn-primary"
        >Save Edit</button>
      </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TodoList',
  mounted () {
    this.loadTodos()
    console.log(this.allTodos)
  },
  data () {
    return {
      todo: {
        task: '',
        details: ''
      },
      edittodo: {
        task: '',
        details: ''
      },
      editIndex: undefined,
      showEdit: false,
      showTodolist: true,
      showAddInput: true
    }
  },
  computed: {
    ...mapGetters({
      allTodos: 'allTodos'
    })
  },
  methods: {
    ...mapActions({
      addTodo: 'addTodo',
      deleteTodo: 'deleteTodo',
      editTodo: 'editTodo',
      loadTodos: 'loadTodos'
    }),
    save () {
      this.addTodo(this.todo)
      this.todo = {
        id: '',
        task: '',
        detail: ''
      }
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
