<template>
  <div>
    <div class="form-group">
      <label>Input Todo</label>
      <input v-model="todo.task" @click="createError = false" type="text" class="form-control" />
      <small class="form-text text-muted">Required*</small>
    </div>
    <div class="form-group">
      <label>Description</label>
      <input v-model="todo.detail" type="text" class="form-control" />
    </div>
    <button class="btn btn-primary" >Cancel</button>&nbsp;
    <button class="btn btn-primary" @click="save">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Edit',
  mounted () {
  },
  data () {
    return {
      todo: {
        id: '',
        task: '',
        detail: ''
      }
    }
  },
  methods: {
    ...mapActions({
      editTodo: 'editTodo'
    }),
    save () {
      this.editTodo(this.todo)
      this.newID++
      this.todo = {
        id: '',
        task: '',
        detail: ''
      }
    }
  }
}
</script>
<style>
</style>
