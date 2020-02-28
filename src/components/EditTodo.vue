<template>
  <div>
    <form @submit.prevent="editTodo()">
      <div class="form-group">
        <label>Edit Todo</label>
        <input v-model="editTask" type="text" class="form-control" />
        <label for="todoTitle" class="form-text text-muted">
          <small>* Required</small>
        </label>
        <br />
      </div>
      <div class="form-group-center">
        <label>Edit Details</label>
        <input v-model="editDetails" type="text" class="form-control" />
        <label for="todoTitle" class="form-text text-muted">
          <small>* Required</small>
        </label>
        <br />
      </div>
    </form>
    <router-link to="/">
      <button type="summit" class="btn btn-warning">Cancel Edit</button>
    </router-link>&nbsp;
    <!-- linkto saveEdit-->
    <button type="summit" class="btn btn-primary" v-on:click="editTodo()">Save Edit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Edit',
  data () {
    return {
      newID: 2,
      editTask: '',
      editDetails: ''
    }
  },
  computed: {
    ...mapGetters({
      allTodos: 'allTodos'
    })
  },
  methods: {
    ...mapActions({
      editTodo: 'editTodo'
    })
  }
}
</script>
<style>
</style>
