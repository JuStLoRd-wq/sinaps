<template>
  <router-link v-for="post in postsStore?.posts" :key="post.id" :to="`/post/${post?.id}`" class="block">
    <div
      class="border p-4 mb-4 cursor-pointer hover:bg-gray-100"
    >
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { usePostsStore } from '@/stores/fetchPostsStore.js'
import { onMounted, ref } from 'vue'
const postsStore = usePostsStore()

const dataRef = ref(null)
onMounted(() => {
  dataRef.value = postsStore.fetchPosts()
})
</script>
