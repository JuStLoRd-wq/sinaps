<template>
  <div>
    <div
      class="w-full card-main__img_mini relative bg-no-repeat bg-cover h-96 z-0 rounded-xl overflow-hidden">
      <div class="relative top-0 left-0 h-full z-10 flex items-center justify-center flex-col gap-5 ">
      </div>
      <img alt="" class="absolute img_line" src="@/assets/img/Liner-black.png">
      <div class="absolute text-position">
        <span class="text-white font-bold">Arktika baliqlarining
          inson oziqlanishidagi </span>
        <p class="text-white">Arktika hududida asosan qadimgi
          kristall qalqonlar va ...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
  .card-main__img_mini {
    background: url("@/assets/img/mountain.jpg") 0 0/100% auto no-repeat;
    /*height:400px;*/
  }

  .img_line {
    bottom: 0%;
    width: 30%;
  }
  .text-position{
    /*right: 10%;*/
    left: 4%;
    bottom: 10%;
  }
</style>
