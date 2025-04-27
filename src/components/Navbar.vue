<template>
  <nav class="px-12">
    <main class="nav__main-class">
      <div class="">
        <img alt="" src="@/assets/icons/sinaps-logo.svg">
      </div>

      <div class="flex">
        <span>Loyiha haqida</span>
        <span class="unique-span">Maqolalar
        <span>
          <img src="@/assets/icons/arrow.svg"
        </span>
        </span>
        <span>Ensiklopediya</span>
      </div>

      <div class="style__search-icon">
        <img alt="" src="@/assets/icons/search.svg">

      </div>
    </main>
  </nav>
</template>

<script>
export default {
  name: 'Navbar.vue'
}
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
