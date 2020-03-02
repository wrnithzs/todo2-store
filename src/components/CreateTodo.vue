<template>
  <div>
    <h1>Create Page</h1><br />
    <form @submit.prevent="addTodo()">
      <div class="form-group">
        <label for="todoTitle">Input todo</label>
        <br />
        <input v-model="todo.task" type="text" class="form-control" />
        <label for="todoTitle" class="form-text text-muted">
          <small>* Required</small>
        </label>
        <br />
      </div>
      <div class="form-group">
        <label for="todoTitle">Details todo</label>
        <br />
        <input v-model="todo.details" type="text" class="form-control" />
        <label for="todoTitle" class="form-text text-muted">
          <small>* Required</small>
        </label>
        <br />
      </div>
    </form>
    <router-link to="/">
      <button type="summit" class="btn btn-warning">Cancel</button>
    </router-link>&nbsp;
    <button type="summit" class="btn btn-info" v-on:click="save">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateTodo',
  data () {
    return {
      todo: {
        id: '',
        task: '',
        details: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addTodo: 'addTodo',
      loadTodos: 'loadTodos'
    }),
    save () {
      this.addTodo(this.todo)
      this.todo = {
        id: '',
        task: '',
        detail: ''
      }
      this.$router.push({ path: '/' })
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
