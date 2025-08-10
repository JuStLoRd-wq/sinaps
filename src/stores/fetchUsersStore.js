// stores/userStore.js
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useUsersStore = defineStore('usersStore', () => {
  const users = ref([]);
  const user = ref([]);

  const error = ref(null);
  const loading = ref(false);

  const fetchUsers = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      users.value = res.data
    } catch (err) {
      error.value = err.message || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  const fetchUser = async (id) => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      user.value = [res.data]
    } catch (err) {
      error.value = err.message || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  return {
    useUsersStore,
    users,
    user,
    error,
    loading,
    fetchUsers,
    fetchUser
  }
})

