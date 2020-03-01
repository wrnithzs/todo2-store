<template>
  <div>
    <ul>
      <div v-if="showTodolist">
      <h1>show todos</h1>
      <li v-for=" (todo, index) in allTodos" :key="index" class="card mb-1">
        <div class="card-body">
          <p class="card-title">Task: {{todo.id}}: {{todo.task}}</p>
          <p class="card-text">detail: {{todo.detail}}</p>
          <div class="row-center">
            <div class="col-auto-mr-auto">
              <!-- button in list op-->
              <button
                v-on:click="deleteTodo(index)"
                type="button"
                class="btn btn-danger"
              >Delete</button>&nbsp;
              <button
                v-on:click="edit(index)"
                type="button"
                class="btn btn-warning"
              >Edit</button>&nbsp;
              <!-- button in list end -->
             <!-- <router-link :to="{name: 'Edit', params: { id: index} }"
              class="btn btn-warning" >Edit</router-link>&nbsp; -->
            </div>
          </div>
        </div>
      </li>
    </div>
      <div v-if="showAddInput">
      <input  type="text" placeholder="Enter a new id" v-model="todo.id"  />&nbsp;
      <input  type="text" placeholder="Enter a new Task" v-model="todo.task"  />&nbsp;
      <input  type="text" placeholder="Enter a new Details" v-model="todo.detail"  /><br><br>
      <button class="btn btn-info" @click="save">Add Todos</button>
      <br>
      </div>
    </ul>
    <!-- out of list  add new todo-->
        <!-- edit section -->
        <div v-if="showEdit">
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
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TodoList',
  data () {
    return {
      todo: {
        id: '',
        task: '',
        detail: ''
      },
      edittodo: {
        id: '',
        task: '',
        detail: ''
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
    // ...mapState({
    //   todos: 'todos'
    // })
  },
  methods: {
    ...mapActions({
      addTodo: 'addTodo',
      deleteTodo: 'deleteTodo'
      // editTodo: 'editTodo'
    }),
    save () {
      this.addTodo(this.todo)
      this.todo = {
        id: '',
        task: '',
        detail: ''
      }
    },
    edit (index) {
      this.edittodo = this.allTodos[index]
      this.editIndex = index
      this.showEdit = true
      this.showTodolist = true
      this.showAddInput = false
      console.log('index:' + this.editIndex)
      console.log(this.edittodo)
      console.log(this.allTodos[index])
    },
    update () {
      if (this.editIndex !== undefined) {
        console.log('updateindex:' + this.editIndex)
      }
      // var index = this.editInde
      console.log(this.allTodos[this.editIndex])
      // this.allTodos[index] = this.edittodo
      // console.log('update!!!')
      this.showTodolist = true
      this.showEdit = false
      this.showAddInput = true
      this.edittodo = {
        id: '',
        task: '',
        detail: ''
      }
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
