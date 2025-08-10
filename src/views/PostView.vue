<template>
  <h2>
    {{ postsStore.post[0]?.title }}
  </h2>
  <p>
    {{ postsStore.post[0]?.body }}
  </p>
</template>

<script setup>
import { usePostsStore } from '@/stores/fetchPostsStore.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const postsStore = usePostsStore()

onMounted(() => {
  postsStore.fetchPost(route.params.id)
  console.log(`Fetching user with ID: ${route.params.id}`)
})
</script>
