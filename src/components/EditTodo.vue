<template>
  <div>
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
    <button class="btn btn-primary" @click="save()">Save Edit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Edit',
  mounted () {
    const T = this
    T.edittodo.id = this.$route.params.id
    T.edittodo.task = this.$route.params.task
    T.edittodo.details = this.$route.params.details
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
      editTodo: 'editTodo'
    }),
    save () {
      console.log(this.edittodo)
      this.editTodo(this.edittodo)
      this.edittodo = {
        id: '',
        task: '',
        details: ''
      }
      this.editindex = null
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
</style>
