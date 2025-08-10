<template>
    <h2>{{ usersStore.user[0]?.name }}</h2>
    <p>{{ usersStore.user[0]?.email }}</p>
    <p>{{ usersStore.user[0]?.address?.street }}</p>


</template>

<script setup>
import {useUsersStore} from '@/stores/fetchUsersStore.js'
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'
const route = useRoute()
const usersStore = useUsersStore()


onMounted(() => {
  usersStore.fetchUser(route.params.id)
  console.log(`Fetching user with ID: ${route.params.id}`)
})
</script>
