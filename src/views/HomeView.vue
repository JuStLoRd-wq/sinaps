<template>
  <main>
    <h1>hello world</h1>
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-5 justify-content-xl-start"
           v-for="card in cardData.slice(0, 1)">
        <!--        <router-link :to="{name:'article', params:{id: card.id}}" class="text-decoration-none">-->
        <Card :card="card" :key="card.id" class="card card-main background-image border-0 w-100" />
        <!--          <CardMobile :card="card" v-else />-->
        <!--        </router-link>-->
      </div>
      <div
        class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-7 d-flex align-content-xxl-between flex-wrap justify-content-start justify-content-xxl-end">
        <!--        <CardMini :card="card"-->
        <!--                  :class="[card.id === 2 || card.id === 5? 'cardMiniWidth':'cardMiniWidthSecond']"-->
        <!--                  :style="(card.id === 2) &&{marginRight:'24px', width:'397px', height:'235px'}||(card.id === 3) &&{width:'292px', height:'235px'}||(card.id === 4) && {marginRight:'24px', width:'292px', height:'235px'} || (card.id === 5) &&{width:'397px', height:'235px'}"-->
        <!--                  class="card card-main background-image border-0 "-->
        <!--                  v-for="card in cardData.slice(1, 5)"-->
        <!--                  v-if="windowWidth > 986"-->
        <!--        />-->
        <!--        <CardMobile :card="card" v-else v-for="card in cardData.slice(1, 5)" />-->
      </div>
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';

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

  }]);

</script>
