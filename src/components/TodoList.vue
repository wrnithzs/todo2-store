<template>
  <div>
    <h1>TodoList Page</h1><br />
  <div v-if="isLoading === true ">
    กำลังโหลดข้อมูลอยู่จ้า
  </div>    <ul>
      <li v-for=" (todo, index) in allTodos" :key="todo.id" class="card mb-1">
        <div class="card-body">
          <p class="card-title">Task:{{index + 1}} {{todo.task}} </p>
          <p class="card-text">detail: {{todo.details}}</p>
          <div class="row">
            <div class="col-auto-mr-auto">
              <router-link
                :to="{name: 'Edit', params: { id: todo.id } }"
                class="btn btn-warning"
              >Edit</router-link>&nbsp;
              <button @click="del(todo)" type="button" class="btn btn-danger">Delete</button>&nbsp;
              &nbsp;
            </div>
            <div class="col-auto">
              <button v-if="index !== 0" v-on:click="moveup(index)" class="btn btn-outline-info">Up</button>&nbsp;
              <button v-if="index !== allTodos.length-1" v-on:click="movedown(index)" class="btn btn-outline-info">Down</button>
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
  async mounted () {
    this.isLoading = true
    console.log(this.loadTodos())
    await this.loadTodos()
    this.isLoading = false
  },
  data () {
    return {
      isLoading: false
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
    async del (todo) {
      const result = await this.deleteTodo(todo.id)
      if (result === 'delete success') {
        this.loadTodos()
      } else {
        console.log('delete error')
      } // this.loadTodos()
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
