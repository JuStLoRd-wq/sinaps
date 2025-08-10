<template>
  <nav class="bg-white">
    <main class="nav__main-class">
      <div class="cursor-pointer">
        <router-link to="/">
          <img alt="" src="@/assets/icons/sinaps-logo.svg" />
        </router-link>
      </div>

      <div class="flex justify-center items-center">
        <span class="text-sm font-medium">Loyiha haqida</span>

        <div ref="dropdown" class="relative inline-block text-left z-50">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black rounded-md text-black focus:outline-none"
          >
            Maqolalar
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            v-if="isOpen"
            class="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div class="py-1" v-for="subject in subjects" :key="subject.id">
              <router-link
                @click="isOpen = false"
                :to="`/articles/${subject.id}`"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-cyan-600"
                >{{ subject.name }}</router-link
              >
            </div>
          </div>
        </div>

        <span class="text-sm font-medium">Ensiklopediya</span>
      </div>

      <div class="style__search-icon">
        <img alt="" src="@/assets/icons/search.svg" />
      </div>
    </main>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)

const dropdown = ref(null)

const subjects = ref([
  { id: 1, name: 'San’at' },
  { id: 2, name: 'Kimyo' },
  { id: 3, name: 'Tarix' },
  { id: 4, name: 'Ta’lim' },
  { id: 5, name: 'Qonun' },
  { id: 6, name: 'Tilshunoslik' },
  { id: 7, name: 'Matematika' },
  { id: 8, name: 'Filosofiya' },
  { id: 9, name: 'Biznes & Iqtisod' },
  { id: 10, name: 'Geografiya & Geologiya' },
  { id: 11, name: 'Biologiya & Tibbiyot' },
  { id: 12, name: 'IT & Texnologiya' },
  { id: 13, name: 'Fizika & Astronomiya' },
  { id: 14, name: 'Fiziologiya & Sotsiologia' },
  { id: 15, name: 'Astronomiya & Astrofizika' },
])

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.nav__main-class {
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  align-items: center;
}

.unique-span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  margin-left: 10px;
  cursor: pointer;
}
</style>
