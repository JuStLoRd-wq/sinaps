<template>
  <footer class="main_style px-12">
    <main class="nav__main-class">
      <div class="">
        <img alt="" src="@/assets/icons/sinaps-logo.svg">
      </div>

      <div class="footer_main">
        <div class="footer_text_2">
          <span>team@sinaps.uz</span>
          <span>+998(90)047-7419</span>
        </div>
        <div class="footer_text_2">
          <span>Toshkent sh., Shahrisabz </span>
          <span>2-tor ko‘chasi, 6-uy</span>

        </div>
      </div>

      <div class="style__search">
        <button class="button_style">
          Takliflar
        </button>

      </div>
    </main>
    <div class="flex items-center justify-center">
      <a class="mr-12" href="https://t.me/just_lordd" target="_blank">
        <img src="@/assets/img/la_telegram-plane.svg">
      </a>
      <a class="mr-12" href="https://www.facebook.com/" target="_blank">
        <img src="@/assets/img/facebook.svg">
      </a>
      <a class="mr-12" href="https://www.instagram.com/" target="_blank">
        <img src="@/assets/img/instagram.svg">
      </a>
      <a href="https://t.me/just_lordd" target="_blank">
        <img src="@/assets/img/twitter.svg">
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer.vue',
};
</script>

<style scoped>
.footer_main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
}

.footer_text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
}

.footer_text_2 {
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  text-justify: center;

}


.button_style {
  width: 100%;
  background-color: #00AABB;
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 600px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
