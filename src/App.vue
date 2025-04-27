<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <section class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow p-6" style="background: #FBFBFB;">
      <section class="px-12">
        <RouterView />
      </section>
    </main>
    <Footer />
  </section>
</template>

<style>
  .style__search-icon {
    border: 1px solid #0EAFC0;
    border-radius: 9px;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .nav__main-class, container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .unique-span {
    margin: 0 40px;
  }

  .button_style {
    display: flex;
    padding: 8px;
    margin: 4px;
    background-color: #0EAFC0;
    border-radius: 5px;
    width: 98px;
    height: 40px;
    color: white;
    justify-content: center;
    font-family: Poppins;
    font-bold: bold;
  }
</style>
