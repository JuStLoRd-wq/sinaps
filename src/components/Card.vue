<template>
  {{props.card.img}}
  <div
    :style="backgroundStyle">
    <div class="card-body flex-row">
      <div class="text-end">
<!--        <img alt="" src="@/assets/img/main-fish.jpg">-->

      </div>
    </div>
    <div class="card-footer border-0 footer-background position-relative">
      <div class="card-footer__title">
        {{card.title}}
      </div>
      <div class="d-flex justify-content-between">
        <p class="card-footer__text w-75">
          {{card.subtitle}}
        </p>
        <span class="card-footer__note">3000
          <!--          <BaseIcon height="24px" name="eye" width="21px" />&#8226 min-->
        </span>
      </div>
    </div>
  </div>

</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['card'])
// console.log(props.card.img)

const backgroundStyle = computed(() => ({
  backgroundImage: `url('${props?.card?.img}')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))
</script>

<style scoped>
  .card-main__img {
    background: url("@/assets/img/main-fish.jpg") 0 0/100% auto no-repeat;
    /*height:400px;*/
  }

  .img_line {
    bottom: 0%;
    width: 100%;
  }

  .text-position {
    /*right: 10%;*/
    left: 4%;
    bottom: 10%;

  }
</style>



