<template>
  <div>
    <todo-item v-for="todo in todos" :key="todo.name" :todo="todo" />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  name: 'TodoList',
  props: ['todos'],
  components: { TodoItem },
};
</script>

<style s
TodoItemcoped>
</style>