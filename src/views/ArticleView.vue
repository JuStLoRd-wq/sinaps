<template>
  <h1>{{}}</h1>
  <div class="flex flex-col justify-center items-center">
    <img class="" :src="getImageUrl(selectedArticle?.img)" alt="" />
    <div class="flex flex-col justify-center items-start ml-5">
      <h2 class="w-48"> {{ selectedArticle?.title }}</h2>
      <p class=" text-justify  text-gray-500 mt-5">
        {{ selectedArticle?.description }}
      </p>
      </div>
  </div>
  <div></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const selectedArticle = ref(null)

const getImageUrl = (img) => {
  console.log(`Original image URL: ${img}`)
  if (!img) {
    return ''
  }
  // If the image URL is from a specific source, modify it
  if (img.includes('picsum.photos')) {
    img = img.replace(/\/(\d+)\/(\d+)$/, '/1400/500')
  }
  console.log(`Modified image URL: ${img}`)
  return img
}

onMounted(() => {
  selectedArticle.value = localStorage.getItem('selectedArticle')

  selectedArticle.value = JSON.parse(selectedArticle.value)
})
</script>
