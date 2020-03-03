<template>
  <div>
    <h1>Edit Page</h1><br />
    <div class="form-group">
      <label>Input Todo</label>
        <input v-model="edittodo.task" type="text" class="form-control" />
      <small class="form-text text-muted">Required*</small>
    </div>
    <div class="form-group">
      <label>Description</label>
        <input v-model="edittodo.details" type="text" class="form-control" />
    </div>
    <router-link to="/">
      <button type="summit" class="btn btn-warning">Cancel</button>
    </router-link>&nbsp;
    <button class="btn btn-info" @click="save()">Save Edit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Edit',
  async mounted () {
    const todoID = this.$route.params.id
    if (todoID !== undefined) {
      const todo = await this.getTodoDetail(todoID)
      this.edittodo.id = todoID
      this.edittodo.task = todo.task
      this.edittodo.details = todo.details
    }
  },
  data () {
    return {
      edittodo: {
        id: '',
        task: '',
        details: ''
      }
    }
  },
  methods: {
    ...mapActions({
      editTodo: 'editTodo',
      getTodoDetail: 'getTodoDetail',
      updateTodo: 'updateTodo'
    }),
    async save () {
      const todoID = this.$route.params.id
      if (todoID !== undefined) {
        const result = await this.updateTodo(this.edittodo)
        if (result === 'update success!') {
          this.$router.push({ path: '/' })
        } else {
          console.log('save error!')
        }
      }
    }
  },
  computed: {
    ...mapGetters({
    })
  }
}
</script>
<style>
</style>
