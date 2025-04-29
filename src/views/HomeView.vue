<template>
  <main>
    <div class="main-home h-auto">
      <div class="flex gap-7" style="height:500px">
        <!-- Left big card -->
        <div
          class="w-full lg:w-2/5 rounded-xl text-white flex items-center justify-center">
          <Card />
        </div>

        <!-- Right side 4 cards -->
        <div class="w-full gap-7 lg:w-3/5 flex flex-col">
          <!-- Row 1 -->
            <div class="flex gap-7 items-start">
            <div
              class="w-2/3 rounded-lg text-white flex items-center justify-center">
              <CardMini />
            </div>
            <div
              class="w-1/3 bg-blue-400 rounded-lg text-white flex items-center justify-center">
              <ExtraMiniCard />

            </div>
          </div>

          <!-- Row 2 -->
          <div class="flex gap-7">
            <div
              class="w-1/3 rounded-lg text-white flex items-center justify-center">
              <ExtraMiniCard />

            </div>
            <div
              class="w-2/3 rounded-lg text-white flex items-center justify-center">
              <CardMini />
            </div>
          </div>
        </div>
      </div>



    </div>


  </main>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
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

