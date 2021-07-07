<template>
  <div class="wrapper">
    <div>
      <h1>Todo List</h1>
      <todo-list :todos="todos" />
    </div>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import TodoList from '../../components/todo/TodoList.vue';

export default {
  name: 'TodoListPage',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          name: 'Todo 1',
        },
        {
          id: 2,
          name: 'Todo 2',
        },
        {
          id: 3,
          name: 'Todo 3',
        },
        {
          id: 4,
          name: 'Todo 4',
        },
      ],
    };
  },
};
</script>

<style>
.wrapper {
  display: flex;
  justify-content: space-evenly;
}
</style>