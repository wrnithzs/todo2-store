
<template>
  <div class="row">
    <div class="col-auto mr-auto">
      <button class="btn btn-primary" @click="edit">Edit</button>&nbsp;
      <button class="btn btn-danger" @click="del">Delete</button>
    </div>
    <div class="c ol-auto">
      <button v-if="showUp === true" class="btn btn-outline-info" @click="up">Up</button>&nbsp;
      <button v-if="showDown === true" class="btn btn-outline-info" @click="down">Down</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['showUp', 'showDown'],
  methods: {
    edit () {
      this.$emit('edit')
    },
    del () {
      this.$emit('del')
    },
    up () {
      this.$emit('up')
    },
    down () {
      this.$emit('down')
    }
  }
}
</script>
