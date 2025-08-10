import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useTodoStore = defineStore('todoStore', () => {
  const todos = ref([])
  const todo = ref([])

  const error = ref(null)
  const loading = ref(false)

  const fetchTodos = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.get('https://6860d2018e74864084441365.mockapi.io/api/posts')
      todos.value = res.data
    } catch (err) {
      error.value = err.massage || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  const fetchTodoCreate = async (params) => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.post(`https://6860d2018e74864084441365.mockapi.io/api/posts`, params)
      todo.value = [res.data]
    } catch (err) {
      error.value = err.massage || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  const fetchTodoUpdate = async (allDatas) => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.put(`https://6860d2018e74864084441365.mockapi.io/api/posts/${allDatas.id}`, allDatas)
      todo.value = [res.data]
    } catch (err) {
      error.value = err.massage || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  const fetchTodoRemove = async (id) => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.delete(`https://6860d2018e74864084441365.mockapi.io/api/posts/${id}`)
      todo.value = [res.data]
    } catch (err) {
      error.value = err.massage || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  return {
    useTodoStore,
    todos,
    fetchTodoUpdate,
    fetchTodoRemove,
   fetchTodoCreate,
    todo,
    error,
    loading,
    fetchTodos,
  }
})
