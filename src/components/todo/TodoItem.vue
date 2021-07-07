<template>
  <div v-if="todo" @click="handleShowDetail(todo)">
    <p>{{ todo.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    handleShowDetail(todo) {
      this.$router.push(`/todos/${todo.id}`);
    },
  },
};
</script>

<style>
</style>