<template>
  <div class="home">
    <img alt="Vue logo" src="https://stickershop.line-scdn.net/stickershop/v1/product/6740/LINEStorePC/main.png;compress=true">
    <todo-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
export default {
  name: 'Home',
  components: {
    TodoList
  }
}
</script>
