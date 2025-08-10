<template>
  <h1 class="text-xl font-bold">{{ dataRef?.category }}</h1>
  <!-- <pre class="text-xl font-bold">{{ dataRef }}</pre> -->
  <div v-if="loader" class="flex justify-center items-center h-48">
    <SpinnerComponent />
  </div>
  <div v-if="!loader && dataRef?.items?.length" class="flex flex-wrap gap-4 justify-center">
    <!-- card start -->

    <div
      v-for="article in dataRef?.items"
      class="flex items-start flex-col justify-start mt-5 mb-5 cursor-pointer hover:scale-90 transition-transform duration-300"
      :key="article.id"
      @click="saveArticleToLocalStorage(article)"
    >
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

      <div class="w-[397px] rounded-2xl shadow-sm overflow-hidden relative group" :key="article.id">
        <div class="flex items-end justify-between" :style="getBgStyle(article.img)">
          <div
            class="absolute h-14 w-full flex items-center justify-between p-2 rounded-b-lg text-white transition-colors duration-300 bg-[rgba(0,0,0,0.2)] group-hover:bg-[rgba(0,0,0,0.5)]"
          >
            <h1 class="text-lg w-36 line-clamp-1">{{ article?.title }}</h1>

            <div class="flex items-center space-x-2">
              <p class="text-sm">3765</p>
              <img class="src=@/assets/img/e.svg" src="@/assets/img/e.svg" alt="icon" />
              <img class="src=@/assets/img/Ellipse.svg" src="@/assets/img/Ellipse.svg" alt="icon" />
              <p class="text-sm">3 min</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="w-80 text-large text-gray-500 mt-5 line-clamp-3">
          {{ article.description }}
        </p>
      </div>
    </div>

    <!-- card end -->
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, watch, ref } from 'vue'
import data from '@/data/data.json'
import SpinnerComponent from '@/components/SpinnerComponent.vue'

const route = useRoute()
const router = useRouter()
const loader = ref(false)

const id = route.params.id
const dataRef = ref(null)
console.log(`Article ID: ${id}`)

const getBgStyle = (img) => {
  console.log(`Setting background image: ${img}`)
  return {
    background: `url(${img}) 0 0 / auto auto no-repeat`,
    height: '250px',
  }
}

const saveArticleToLocalStorage = (article) => {
  localStorage.setItem('selectedArticle', JSON.stringify(article))
  console.log(`Saved article to localStorage: ${article.title}`)
  router.push(`/article/${article.id}`)
  console.log(`Navigating to article with ID: ${article.id}`)
}

watch(
  () => route.params.id,
  (newId) => {
    loader.value = true

    console.log(`Article ID changed to: ${newId}`)
    setTimeout(() => {
      dataRef.value = data.categories.find((article) => article.id === parseInt(newId))
      console.log(`Fetched article data: ${dataRef.value}`)
      loader.value = false
    }, 1000)
  },
)

onMounted(() => {
  loader.value = true
  setTimeout(() => {
    dataRef.value = data.categories.find((article) => article.id === parseInt(id))
    console.log(`Fetched article data: ${dataRef.value}`)
    loader.value = false
  }, 1000)
})
</script>

<style scoped>
.custom-style {
  background: url('@/assets/img/ice.jpg') 0 0 / auto auto no-repeat;
  height: 250px;
}
</style>
