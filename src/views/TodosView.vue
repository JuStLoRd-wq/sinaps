<template>
  <main>
    <div>
      <h1 class="text-2xl font-bold mb-4">Todos</h1>
      <p class="mb-4">Click on a todo to view details.</p>
      <p v-if="!todoStore?.todos?.length">Loading todos...</p>
      <p v-else-if="todoStore?.todos?.length === 0">No todos found.</p>
      <p v-else>Found {{ todoStore?.todos?.length }} todos.</p>

      <div>
        <input
          type="text"
          name=""
          id=""
          v-model="modelRef"
          placeholder="Search todos..."
          class="border p-2 mb-4 w-full"
        />
        <button :disabled="!modelRef.length" @click="createTodo" class="bg-blue-500 text-white p-2">
          {{ !modelRef.length ? 'Write something..' : 'Create' }}
        </button>
      </div>
    </div>
    <div v-if="loader" class="flex justify-center items-center h-48">
      <SpinnerComponent />
    </div>
    <div v-if="!loader" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div v-for="todo in todoStore?.todos" :key="todo.id" class="block">
        <div class="flex justify-between border p-4 mb-4 hover:bg-gray-100">
          <div class="cursor-pointer" @click="todoSinglePage(todo.id)">
            <h1>{{ todo?.name }}</h1>
            <img :src="todo?.avatar" width="120" alt="" class="aspect-square" />
          </div>
          <div class="flex flex-col items-end justify-around w-52">
            <button @click="editTodoModal(todo)" class="bg-blue-500 text-white p-2 mb-2 w-8">
              <img src="@/assets/img/edit.svg" alt="edit" />
            </button>
            <button @click="deleteTodo(todo.id)" class="bg-red-500 text-white p-2 w-8">
              <img src="@/assets/img/delete.svg" alt="delete" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <Modal :show="isOpen" @close="isOpen = false" @save="editTodo(paramsModal)">
      <input type="text" v-model="paramsModal.name" class="border p-2 mb-4 w-full" />
    </Modal>

  </main>
</template>

<script setup>
import { useTodoStore } from '@/stores/fetchTodoStore.js'
import { onMounted, ref } from 'vue'
import Modal from '@/components/Modal.vue'
import SpinnerComponent from '@/components/SpinnerComponent.vue'
const todoStore = useTodoStore()
const loader = ref(false)
const modelRef = ref('')
const isOpen = ref(false)
const params = ref({
  name: '',
  
})

// 88bd98f93c5945be8db6e96a4453efbb

const createTodo = async () => {
  loader.value = true
  params.value.name = modelRef.value
  await todoStore.fetchTodoCreate(params.value)
  modelRef.value = ''
  await todoStore.fetchTodos() // Refresh the list after creating a new todo
  console.log(`Creating todo with name: ${params.value.name}`)
  params.value.name = '' // Reset the input field after creation
  loader.value = false
}

const deleteTodo = async (id) => {
  loader.value = true

  await todoStore.fetchTodoRemove(id)
  console.log(`Deleting todo with ID: ${id}`)
  await todoStore.fetchTodos() // Refresh the list after deletion
  loader.value = false
}

const paramsModal = ref(null)

const editTodoModal = async (allDatas) => {
  isOpen.value = true
  paramsModal.value = allDatas
  console.log(paramsModal.value)
}

const editTodo = async (allDatas) => {
  loader.value = true

  console.log(`Editing todo with ID: ${allDatas.id} and name: ${allDatas.name}`)
  await todoStore.fetchTodoUpdate(allDatas)
  await todoStore.fetchTodos() // Refresh the list after editing
  isOpen.value = false
  loader.value = false
}

const todoSinglePage = (id) => {
  console.log(`Navigating to todo with ID: ${id}`)
}

onMounted(() => {
  loader.value = true

  todoStore
    .fetchTodos()
    .then(() => {
      console.log('Todos fetched successfully')
      loader.value = false
    })
    .catch((error) => {
      console.error('Error fetching todos:', error)
      loader.value = false
    })


})
</script>
