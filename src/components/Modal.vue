<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="emitClose"
  >
    <div class="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Modal Title</h2>
        <button @click="emitClose" class="text-gray-500 hover:text-black text-2xl">&times;</button>
      </div>
      <div>
        <slot />
      </div>
      <div class="mt-6 text-right flex justify-end space-x-2">
        <button
          @click="emitClose"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Close
        </button>
        <button
          @click="emitSave"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
})
const emit = defineEmits(['close'])

function emitClose() {
  emit('close')
}

function emitSave() {
  // Logic to save changes can be added here
  emit('save')
  emitClose()
}
</script>
