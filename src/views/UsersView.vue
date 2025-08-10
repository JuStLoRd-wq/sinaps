<template>
  <router-link v-for="user in usersStore?.users" :key="user.id" :to="`/user/${user?.id}`" class="block">
    <div
      class="border p-4 mb-4 cursor-pointer hover:bg-gray-100"
    >
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { useUsersStore } from '@/stores/fetchUsersStore.js'
import { onMounted, ref } from 'vue'
const usersStore = useUsersStore()

const dataRef = ref(null)
onMounted(() => {
  dataRef.value = usersStore.fetchUsers()
})
</script>
