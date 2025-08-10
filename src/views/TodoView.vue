<template>
  <h2>
    {{ todosStore.todo[0]?.title }}
  </h2>
  <p>
    {{ todoStore.todo[0]?.body }}
  </p>
</template>

<script setup>
import { useTodoStore } from '@/stores/fetchTodoStore.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const todosStore = useTodoStore()

onMounted(() => {
  todosStore.fetchTodo(route.params.id)
  console.log(`Fetching todo with ID: ${route.params.id}`)
})
</script>
