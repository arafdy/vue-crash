<template>
    <div v-if="todo">
        <p>{{todo.name}}</p>
    </div>
  
</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todo"]
}
</script>

<style>

</style>