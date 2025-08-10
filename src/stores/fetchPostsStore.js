import { defineStore } from "pinia"
import axios from "axios"
import { ref } from "vue"

export const usePostsStore = defineStore("postsStore", () => {
  const posts = ref([])
  const post = ref([])

  const error = ref(null)
  const loading = ref(false)

  const fetchPosts = async () => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts.value = res.data
    } catch (err) {
      error.value = err.massage || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  const fetchPost = async (id) => {
    loading.value = true
    error.value = null
    try {
      const res = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`)
      post.value = [res.data]
    } catch (err) {
      error.value = err.massage || 'Failed to fetch'
    } finally {
      loading.value = false
    }
  }

  return {
    usePostsStore,
    posts,
    post,
    error,
    loading,
    fetchPosts,
    fetchPost
  }
})

