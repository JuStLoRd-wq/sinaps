<template>
  <div
    class="group relative w-full h-full cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-cover bg-center transition-transform duration-300"
    :style="`background-image: url(${backgroundUrl});`"
  >
    <!-- Hover gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"
    >
  dsdfsdf</div>



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
import { computed } from 'vue'

// import backgroundImg from '@/assets/img/main-fish.jpg'

import backgroundImage from '@/assets/img/main-fish.jpg'// Replace with your local image

const backgroundUrl = backgroundImage
// Example background URL

// const backgroundStyle = computed(() => ({
//   backgroundImage: `url(${backgroundImg})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: '0 0',
//   backgroundAttachment: scroll
// }))

const props = defineProps(['card'])
// console.log(props.card.img)

</script>

<style scoped lang="scss">
@forward "@/assets/_variables.scss";
@forward "@/assets/_font.scss";


.card-main {
  border-radius: 10px !important;
  cursor: pointer;

  .footer-background {
    background: linear-gradient(180deg, rgba(84, 84, 84, 0.05) 0%, rgba(0, 0, 0, 0.9) 100%);
    border-radius: 0 0 10px 10px;
    height: 190px;
    padding: 0 18px 18px 24px !important;

  }

  //.background-box {
  //  width: 100%;
  //  height: 400px;
  //  background-image: url('@/assets/img/main-fish.jpg');
  //  background-size: cover;
  //  background-position: center;
  //  background-repeat: no-repeat;
  //}

  //.footer-background:hover{
  //  background: linear-gradient(180.36deg, rgba(32, 32, 32, 0.05) -17.78%, rgba(0, 0, 0, 0.9) 72.89%);
  //}

  .card-footer {
    &__title {
      color: #FFFFFF;
      @include font("Poppins", normal, 36px, 600, 54px, #FFFFFF, 0.04em);

    }

    &__text {
      display: flex;
      justify-content: start;
      @include font("Poppins", italic, 16px, 400, 150%, #FFFFFF, 0.04em);
    }

    &__note {
      margin-top: auto;
      @include font("Poppins", italic, 16px, 400, 150%, #FFFFFF, 0.04em);
    }
  }

}

.background-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}


.card-main__img {
  width: 400px;
}

.smth {
  background: linear-gradient(180.36deg, rgba(32, 32, 32, 0.05) -17.78%, rgba(0, 0, 0, 0.9) 72.89%) !important;
}


</style>
