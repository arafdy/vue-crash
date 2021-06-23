<template>
    <div>
      <h1>Todo list</h1>
    </div>
    
    <div>
      <todo-item v-for="todo in todos" :key="todo.name" :todo="todo"/>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name: 'TodoList',
    components: { TodoItem},
    data(){
        return{
            todos: [
                {
                    name: 'learn vue'
                },
                {
                    name: 'notice me senpai'
                }
            ]
        }
    }

}
</script>

<style s
TodoItemcoped>

</style>