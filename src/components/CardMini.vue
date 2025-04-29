<template>
  <div
    class="group cursor-pointer relative h-56 w-full rounded-2xl overflow-hidden shadow-lg bg-cover bg-center transition-transform duration-300"
    :style="`background-image: url(${backgroundUrl});`"
    style="height: 235px"

  >
    <!-- Hover gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"
    ></div>

    <!-- Text content -->
    <div class="relative z-10 p-6 text-white flex flex-col justify-end h-full">
      <h2 class="text-2xl font-bold">Card Title</h2>
      <p class="mt-2 text-sm">
        This is a beautiful card with a background image and a hover gradient effect.
      </p>
    </div>
  </div>

</template>

<script setup>
import BaseIcon from './BaseIcon.vue';
import backgroundImage from '@/assets/img/mountain.jpg'// Replace with your local image

const backgroundUrl = backgroundImage
</script>

<style scoped lang="scss">


.background-box {
  width: 100%;
  height: 230px;
  background-image: url('@/assets/img/main-fish.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
