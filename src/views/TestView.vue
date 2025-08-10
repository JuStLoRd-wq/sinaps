<template>
  <div>
    <h1>Test View</h1>
    <!-- <div v-if="testStore.error">{{ testStore.error }}</div>
    <ul v-else>
      <li
        v-for="item in testStore.newsApiRef"
        :key="item.id"
        :style="item.id > 5 ? 'color: green;' : 'color: red;'"
      >
        {{ item.title }}
        {{ item.completed ? '✔️' : '❌' }}
      </li>
    </ul> -->
    <div class="flex flex-col gap-4 w-32">
      <input v-model="postParams.name" placeholder="Name" />
      <input v-model="postParams.age" placeholder="Age" />
      <br>
      {{ numberOrders }}
      <button
        class="bg-blue-500 text-white rounded px-1 py-1"
        @click="createTodo"
        :disabled="!postParams.name || !postParams.age"
      >
        {{ !postParams.name || !postParams.age ? 'Fill all fields' : 'Add' }}
      </button>
    </div>
    <div v-if="loader" class="flex justify-center items-center h-48">
      <SpinnerComponent />
    </div>
    <div v-else>
      <p v-if="!todoStore?.todos?.length">No todos found.</p>
      <p v-else>Found {{ todoStore?.todos?.length }} todos.</p>
    </div>
    <ol v-if="!loader" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <li
        class="flex justify-between border hover:bg-gray-100"
        v-for="item in todoStore?.todos"
        :key="item.id"
      >
        <div>
          <div>
            <div class="flex gap-2">
              {{ item.name }}
            </div>
            <div class="flex gap-2">
              {{ item?.age || '-' }}
            </div>
          </div>
          <img class="w-32" :src="item.avatar" alt="" width="100" height="100" />
        </div>
        <div class="flex flex-col items-end justify-around w-52 p-2">
          <button class="bg-blue-500 text-white rounded px-1 py-1" @click="updateTest(item)">
            edit
          </button>
          <button class="bg-red-500 text-white rounded px-1 py-1" @click="deleteTest(item.id)">delete</button>
        </div>
      </li>
    </ol>
  </div>

  <Modal :show="isOpen" @close="isOpen = false" @save="saveUpdate(paramsModal)">
    <input type="text" v-model="paramsModal.name" class="border p-2 mb-4 w-full" />
    <input type="text" v-model="paramsModal.age" class="border p-2 mb-4 w-full" />
  </Modal>
</template>

<script setup>
import { onMounted, watch, watchEffect, computed } from 'vue'
import { ref } from 'vue'
import { useTodoStore } from '@/stores/fetchTodoStore'
import { useTestStore } from '@/stores/fetchTestStore.js'

import SpinnerComponent from '@/components/SpinnerComponent.vue'
import Modal from '@/components/Modal.vue'

const testStore = useTestStore()
const todoStore = useTodoStore()

const isOpen = ref(false)

const updateTest = async (item) => {
  console.log('Update Test:', item)
  paramsModal.value.name = item.name
  paramsModal.value.age = item.age
  paramsModal.value.id = item.id


  isOpen.value = true
}

const postParams = ref({
  name: '',
  age: '',
})
const paramsModal = ref({
  name: '',
  age: '',
  id: null,
})

const numberOrders = computed(() => {
  return +postParams.value.age + 10
})

const loader = ref(false)

const saveUpdate = async () => {
  try {
    loader.value = true
    console.log('Saving Update:', paramsModal.value);

    await testStore.fetchTestUpdate(paramsModal.value)
    await todoStore.fetchTodos()
    isOpen.value = false
  } catch (error) {
    console.error('Error updating todo:', error)
  } finally {
    loader.value = false
  }


}

const deleteTest = async (id) => {
  console.log('Delete Test ID:', id);

  try {
    loader.value = true
    await testStore.fetchTodoRemove(id)
    await todoStore.fetchTodos()
  } catch (error) {
    console.error('Error deleting todo:', error)
  } finally {
    loader.value = false
  }
}

const createTodo = async () => {
  try {
    loader.value = true
    await todoStore.fetchTodoCreate(postParams.value)
    await todoStore.fetchTodos()
  } catch (error) {
    console.error('Error creating todo:', error)
  } finally {
    loader.value = false
  }
}

// watch(() => postParams.value.name,
//   (newParams, oldParams) => {
//     console.log('Post Params updated:', newParams)
//     console.log('Post Params old:', oldParams)

//   }
// )

watchEffect(() => {
  postParams.value.name = postParams.value.name.trim()
  console.log('Post Params:', postParams.value.name)
})

onMounted(() => {
  todoStore.fetchTodos()
})
</script>
