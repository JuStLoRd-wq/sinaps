import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useTestStore = defineStore('testStore', () => {
  const newsApiRef = ref([])
  const todoFromPost = ref([])
  const error = ref(null)
  const loading = ref(false)

  const fetchTest = async () => {
    loading.value = true
    error.value = null

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      newsApiRef.value = res.data
    } catch (err) {
      error.value = err.message || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  const test = ref([])
  const fetchTodoCreate = async (params) => {
    loading.value = true
    error.value = null

    try {
      const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, params)
      todoFromPost.value = [res.data]
    } catch (err) {
      error.value = err.message || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }
  const fetchTestUpdate = async (allDatas) => {
    console.log('allDatas', allDatas);
    loading.value = true
    error.value = null
    try {
      const res = await axios.put(`https://6860d2018e74864084441365.mockapi.io/api/posts/${allDatas.id}`, allDatas)
      test.value = [res.data]
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
    } catch (err) {
      error.value = err.massage || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }


    return {
      newsApiRef,
      fetchTodoRemove,
      fetchTest,
      fetchTodoCreate,
      todoFromPost,
      fetchTestUpdate,
      test
  }

})
