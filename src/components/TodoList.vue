<template>
  <div>
    <ul>
      <h1>show todos</h1>
      <li v-for=" (todo, index) in allTodos" :key="index" class="card mb-1">
        <div class="card-body">
          <p class="card-title">Task: {{todo.id}}: {{todo.task}}</p>
          <p class="card-text">detail: {{todo.detail}}</p>
          <div class="row-center">
            <div class="col-auto-mr-auto">
              <button
                v-on:click="deleteTodo(index)"
                type="button"
                class="btn btn-danger"
              >Delete</button>&nbsp;
              <button
                v-on:click="showEdit = true"
                type="button"
                class="btn btn-warning"
              >Edit</button>&nbsp;
             <!-- <router-link :to="{name: 'Edit', params: { id: todo.id} }"
              class="btn btn-warning" >Edit</router-link>&nbsp; -->
            </div>
          </div>
      </div>
      </li>
    </ul>

      <input  type="text" placeholder="Enter a new Task" v-model="todo.task"  />&nbsp;
      <input  type="text" placeholder="Enter a new Details" v-model="todo.detail"  /><br><br>
      <button class="btn btn-info" @click="save">Add Todos</button>
    <br />
        <br>
        <div v-if="showEdit">
        <div class="form-group">
        <label>Edit Todo</label>
        <label for="exampleInputEmail1"> Edit Input Todo</label>
        <input type="text" v-model="edittask" class="form-control" />
        <br />
        <label>Edit Details</label>
        <input type="text" v-model="editdetail" class="form-control" />
      </div>
      <button
        v-on:click="updateTodo(index)"
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
      newID: 2,
      showEdit: false,
      edittask: '',
      editdetail: ''
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
      deleteTodo: 'deleteTodo'
      // editTodo: 'editTodo'
    }),
    save () {
      this.addTodo(this.todo)
      this.newID++
      this.todo = {
        id: '',
        task: '',
        detail: ''
      }
      // this.$refs.item.focus()
    },
    edit () {
      this.editTodo(this)
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
