<template>
  <h1>Home</h1>
  <div><todo-list/></div>
</template>

<script>
import TodoList from '../components/todo/TodoList.vue'

export default {
  name: 'Home',
  components: {
    TodoList
  }

}
</script>

<style>

</style>