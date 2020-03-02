<template>
  <div>
    <div class="form-group">
      <label>Input Todo</label>
      <input v-model="edittodo.task" click="createError = false" type="text" class="form-control" />
      <small class="form-text text-muted">Required*</small>
    </div>
    <div class="form-group">
      <label>Description</label>
      <input v-model="edittodo.detail" type="text" class="form-control" />
    </div>
    <button class="btn btn-primary" >Cancel</button>&nbsp;
    <button class="btn btn-primary" @click="save()">Save</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Edit',
  mounted () {
    const T = this
    T.editindex = this.$route.params.id
    T.edittodo.task = this.$route.params.task
    T.edittodo.detail = this.$route.params.detail
  },
  data () {
    return {
      editindex: undefined,
      edittodo: {
        task: '',
        detail: ''
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
      addTodo: 'addTodo',
      editTodo: 'editTodo'
    }),
    save () {
      console.log(this.edittodo)
      console.log('index:' + this.editindex)
      this.editTodo(this.editindex, this.edittodo)
      this.edittodo = {
        task: '',
        detail: ''
      }
      this.editindex = null
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
</style>
