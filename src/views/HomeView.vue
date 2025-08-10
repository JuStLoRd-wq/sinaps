<template>
  <main>
    <div class="main-home h-auto">
      <div class="flex gap-7" style="height:500px">
        <!-- Left big card -->
        <div class="w-full lg:w-2/5 rounded-xl text-white flex items-center justify-center">
          <Card />
        </div>

        <!-- Right side 4 cards -->
        <div class="w-full gap-7 lg:w-3/5 flex flex-col">
          <!-- Row 1 -->
          <div class="flex gap-7 items-start">
            <div class="w-2/3 rounded-lg text-white flex items-center justify-center">
              <CardMini />
            </div>
            <div class="w-1/3 bg-blue-400 rounded-lg text-white flex items-center justify-center">
              <ExtraMiniCard />

            </div>
          </div>

          <!-- Row 2 -->
          <div class="flex gap-7">
            <div class="w-1/3 rounded-lg text-white flex items-center justify-center">
              <ExtraMiniCard />

            </div>
            <div class="w-2/3 rounded-lg text-white flex items-center justify-center">
              <CardMini />
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- first card row start-->
    <section>

      <div class="mt-4 flex justify-between">
        <!-- first child -->
        <div>
          <p class="text-sm text-orange-400 font-semibold mb-2">
            Bu qiziq
          </p>

          <h2 class="text-4xl font-bold mb-4">
            Interaktiv saytlarimiz
          </h2>
        </div>
        <!-- second child -->

        <div class="flex items-center space-x-4">
          <!-- Иконка -->
          <svg class="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <!-- Здесь вставить svg path -->
          </svg>

          <!-- Текст с прозрачностью -->
          <p class="text-base text-gray-500 text-opacity-60 max-w-lg">
            Mazkur bo‘limda turli fanlar bo‘yicha interaktiv saytlar joylashgan.
            Masalan, kimyo fanidan davriy jadval yoki geofrafiya fanidan dunyo xaritasi.
          </p>
        </div>
      </div>
      <!-- card -->
      <div class="flex justify-between mt-12">
        <div class="w-[397px] rounded-2xl shadow-lg overflow-hidden">
          <img class="w-full h-48 object-cover" src="../assets/img/world-map.jpg" alt="Card Image">
          <div class="p-4 hover:bg-black hover:text-white hover:opacity-50">
            <h3 class="text-lg font-bold mb-2">Dunyo Xaritasi</h3>
            <p class="text-gray-600 text-sm">
            </p>
          </div>
        </div>
        <div class="w-[397px] rounded-2xl shadow-lg overflow-hidden">
          <img class="w-full h-48 object-cover" src="../assets/img/mendeleev-jadvali.jpg" alt="Card Image">
          <div class="p-4 hover:bg-black hover:text-white hover:opacity-50">
            <h3 class="text-lg font-bold mb-2">Davriy Jadval</h3>
            <p class="text-gray-600 text-sm">
            </p>
          </div>
        </div>

        <div class="w-[397px]  rounded-2xl shadow-lg  overflow-hidden">
          <img class="w-full h-48 object-cover" src="../assets/img/world-map.jpg" alt="Card Image">
          <div class="p-4 hover:bg-black hover:text-white hover:opacity-50">
            <h3 class="text-lg font-bold mb-2 ">Dunyo Xaritasi</h3>
            <p class="text-gray-600 text-sm">
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 flex justify-between">
        <!-- first child -->
        <div>
          <p class="text-sm text-orange-400 font-semibold mb-2">
            Malumotlar to’plami
          </p>

          <h2 class="text-4xl mt-12 font-bold mb-4">
            Ensiklopediya
          </h2>
          <p class="text-base mt-12 text-gray-500 text-opacity-60 max-w-lg">
            Ensiklopediya — muayyan tizimga solingan keng qamrovli bilimlar to‘plami.
          </p>

        </div>
        <!-- second child -->

        <div class="flex items-center space-x-4">
          <!-- Иконка -->
          <svg class="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <!-- Здесь вставить svg path -->
          </svg>

          <!-- Текст с прозрачностью -->

          <ul class="space-y-2 text-bold">
            <li class="text-gray-500 text-bold hover:text-purple-500 border-b-2 border-gray-200 inline-block transition-colors duration-200 cursor-pointer">
              Timsohlar odamga hamla qiladimi?
            </li>
            <li class="text-gray-500 cursor-pointer border-b-2 border-gray-200  ">
              Termometrni kim ixtiro qilgan??
            </li>
            <li class="text-gray-500 cursor-pointer  border-b-2 border-gray-200">
              Kaktuslar suvsiz qanday yashaydi?
            </li>
            <li class="text-gray-500 cursor-pointer border-b-2 border-gray-200 ">
              Nega kenguruning xaltachasi bor?
            </li>
            <li class="text-gray-500 cursor-pointer  border-b-2 border-gray-200">
              Delfin gapira oladimi?
            </li>
          </ul>

        </div>
      </div>


    </section>
    <!-- first card row end-->



  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Card from '@/components/CardComponent.vue';
import ExtraMiniCard from '@/components/ExtraMiniCard.vue';
import CardMini from '@/components/CardMini.vue';
import BaseIcon from '@/components/BaseIcon.vue'

const cardData = ref([
  {
    id: 1,
    title: 'Arktika baliqlarining inson oziqlanishidagi',
    subtitle: 'Arktika hududida asosan qadimgi kristall qalqonlar va',
    img: '@/assets/img/main-fish.jpg',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...',
  },
  {
    id: 2,
    title: 'Shimolda nimalar iste’mol qilinadi?',
    img: '/src/assets/images/arctica.png',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...',

  },
  {
    id: 3,
    title: 'Kelajakdagi Arktikada qurilishlari davom',
    img: '/src/assets/images/mountain.jpg',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...',

  },
  {
    id: 4,
    title: 'Kelajakdagi Arktikada qurilishlari davom',
    img: '/src/assets/images/mountain.jpg',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...',

  },
  {
    id: 5,
    title: 'Shimolda nimalar iste’mol qilinadi?',
    img: '/src/assets/images/arctica.jpg',
    text: 'TED 2009ʼda ochiq bayon etilgan nutqida Koleman oʻzining Amerika liberal sanʼati kelajagi bilan bogʻliq umidlari va tashvishlari bilan oʻrtoqlashdi. Shundan soʻng, u Bennington kolleji prezidenti sifatida oliy taʼlimning jamiyatdagi oʻrnini tanqid qildi...',

  },
]);

  
</script>


<style lang="scss">
@forward "@/assets/_variables.scss";
@forward "@/assets/_font.scss";


div {
  margin: 0;
  padding: 0;
}

.main-home {
  margin-top: 4rem;

  @media (max-width: $tablet) {
    margin-top: 0.5rem;

  }
}

.main-font {
  @include font("Poppins", normal, 36px, 600, 150%, #121212, 0.04em);
  //width: 70% !important;
}

.main-font__info {
  @include font("Poppins", italic, 18px, 500, 150%, #B6B6B6, 0.04em);
  width: 548px;

  @media (max-width: 986px) {
    width: 320px;
  }

}
</style>
